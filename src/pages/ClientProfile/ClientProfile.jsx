import NavBar from "../../components/navBar/NavBar.jsx";
import imagenes from "../../images/imagenes.jsx";
import Button from "@mui/material/Button";
import "./_ClientProfile.scss";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import PetCard from "../../components/PetCard/PetCard.jsx";
import { distritos, razas } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateUserAsync,
  userToEdit,
  getOneUserAsync,
} from "../../slices/userSlice.js";
import {
  myPets,
  getPetsByUserAsync,
  createPetAsync,
} from "../../slices/petSlice.js";
import { cloudinary_constant } from "../../utils/functions.js";
const ClientProfile = () => {
  //----------------useState Cloudinary-------------------------------
  const [photoUserUrl, setPhotoUserUrl] = useState();
  const [photoPetUrl, setPhotoPetUrl] = useState();
  const [photoName, setPhotoName] = useState("Choose file...");

  //--------------------------------------------------------------------
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpenAdd = () => {
    setPhotoName("Choose file...");
    setPhotoPetUrl("");
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setSexo("");
    setRaza("");
    setTamano("");
    setCaracter("");
    setOpenAdd(false);
  };

  const [sexo, setSexo] = useState("");
  const [raza, setRaza] = useState("");
  const [tamano, setTamano] = useState("");
  const [caracter, setCaracter] = useState("");
  const dispatch = useDispatch();
  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  const handleChangeRaza = (event) => {
    setRaza(event.target.value);
  };

  const handleChangeTamano = (event) => {
    setTamano(event.target.value);
  };
  const handleChangeCaracter = (event) => {
    setCaracter(event.target.value);
  };

  const Input = styled("input")({
    display: "none",
  });

  // Parte del REDUX TOOLKIT ------------USER-------------

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const ROLE = JSON.parse(localStorage.getItem("infoUser"))?.role;
  const userID = JSON.parse(localStorage.getItem("infoUser"))._id;

  const handleOpen = async () => {
    // Funcion que abre solo el modal de editar usario
    setPhotoName("Choose file..."); // cloudinary state
    await dispatch(userToEdit(user));
    setPhotoUserUrl(user.photo_url); // chose file.... change state
    setOpen(true);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const dataUser = {
      district: elements[0].value,
      address: elements[2].value,
      phone: elements[4].value,
      photo_url: photoUserUrl, //CLOUDINARY
    };
    dispatch(userToEdit(dataUser));
    await dispatch(updateUserAsync({ id: userID, ...dataUser }));
    handleClose();
  };
  //-------------------------------------------------------------
  ///////////////////////////////////////////////////////////////
  // Parte del REDUX TOOLKIT ------------PETS------------------
  const { id } = useParams();
  useEffect(() => {
    if (!pets) dispatch(getPetsByUserAsync(ROLE === "user" ? userID : id));
    if (ROLE === "walker") {
      dispatch(getOneUserAsync(id));
    }
  }, []);

  const pets = useSelector(myPets);

  const handleCreatePet = async (e) => {
    e.preventDefault();

    const { elements } = e.target;

    const pet = {
      name: elements[0].value,
      age: elements[2].value,
      gender: elements[4].value,
      breed: elements[6].value,
      size: elements[8].value,
      nature: elements[10].value,
      additional_information: elements[12].value,
      photo_url: photoPetUrl,
    };

    await dispatch(createPetAsync({ pet, id: userID }));
    await dispatch(getPetsByUserAsync(userID));
    handleCloseAdd();
  };

  //----------------------CLOUDINARY------------------------------------------------
  const showWidgetPhotoUser = () => {
    window.cloudinary.openUploadWidget(
      cloudinary_constant("user_photos"),
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, original_filename, format } = result.info;
          setPhotoUserUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
      }
    );
  };

  const showWidgetPhotoPet = () => {
    window.cloudinary.openUploadWidget(
      cloudinary_constant("pet_photos"),
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, original_filename, format } = result.info;
          setPhotoPetUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
      }
    );
  };
  //------------------------------------------------------------------

  return (
    <div className="ClientProfile">
      <NavBar />
      <div className="client-Container">
        <div className="cardC">
          <Avatar
            sx={{ width: "240px", height: "240px" }}
            className="avatarC"
            src={user?.photo_url}
          />
          <h2 className="card-title">
            {user?.firstname} {user?.lastname}
          </h2>
        </div>
        <div className="info-containerC">
          <h2 className="info">Dirección:</h2>
          <p className="info-presentacionC">
            {user?.address}{" "}
            <strong>
              {}
              {user?.district}
            </strong>
          </p>
          <h2 className="info">Teléfono:</h2>
          <p className="info-presentacionC">{user?.phone}</p>

          <div>
            {ROLE === "user" ? (
              <div className="actions">
                <Button
                  className="boton"
                  onClick={() => navigate("/datesclient")}
                >
                  <img
                    className="dogButton"
                    src={imagenes.img9}
                    alt="..."
                  ></img>
                  Ver mis Citas
                </Button>
                <Button className="boton" onClick={handleOpen}>
                  <img
                    className="dogButton"
                    src={imagenes.img10}
                    alt="..."
                  ></img>
                  Editar Perfil
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={ModalStyle.style} className="boxModal">
                    <div style={ModalStyle.header}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        style={{
                          fontFamily: "Roboto-Bold",
                        }}
                      >
                        Editar Perfil
                      </Typography>
                    </div>
                    <form
                      onSubmit={handleEditProfile}
                      style={ModalStyle.body}
                      className="boxModalBody"
                    >
                      <FormControl fullWidth style={{ marginTop: "10px" }}>
                        <InputLabel
                          size="small"
                          id="demo-simple-select-autowidth-label"
                        >
                          Distrito
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-autowidth-label"
                          id="demo-simple-select-autowidth"
                          label="Distrito"
                          size="small"
                          style={{ margin: "10px 0px" }}
                          defaultValue={user?.district}
                          required
                        >
                          {distritos.map((distritoSel) => (
                            <MenuItem key={distritoSel} value={distritoSel}>
                              {distritoSel}
                            </MenuItem>
                          ))}
                        </Select>

                        <TextField
                          className="input"
                          style={{ margin: "10px 0px" }}
                          label="Dirección"
                          size="small"
                          type="text"
                          defaultValue={user?.address}
                          required
                        />
                        <TextField
                          className="input"
                          style={{ margin: "10px 0px" }}
                          label="Teléfono de Contacto"
                          size="small"
                          type="text"
                          defaultValue={user?.phone}
                          required
                        />
                        <p
                          style={{
                            color: "#A5A5A5",
                            marginBottom: "5px",
                            fontFamily: "Roboto-Regular",
                          }}
                        >
                          Subir una foto de perfil
                        </p>
                        <div className="input-file">
                          <span className="input-file-text">{photoName}</span>
                          <label htmlFor="contained-button-file">
                            <Button
                              variant="contained"
                              style={{
                                backgroundColor: "#FFFF",
                                color: "#000",
                                width: "10srem",
                                marginRight: "10px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                fontFamily: "Roboto-bold",
                              }}
                              component="span"
                              onClick={showWidgetPhotoUser}
                            >
                              Choose File
                            </Button>
                          </label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            columnGap: "10px",
                          }}
                        >
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleClose}
                          >
                            Cerrar
                          </Button>
                          <Button type="submit" style={ModalStyle.boton}>
                            Finalizar
                          </Button>
                        </div>
                      </FormControl>
                    </form>
                  </Box>
                </Modal>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="petsContainer">
        {ROLE === "user" ? (
          <>
            <Button className="addPet" onClick={handleOpenAdd}>
              <img className="add" src={imagenes.img13} alt="..."></img>
              Añadir Mascota
            </Button>
            <Modal
              open={openAdd}
              onClose={handleCloseAdd}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={ModalStyle.style} className="boxModal">
                <div style={ModalStyle.header}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{
                      fontFamily: "Roboto-Bold",
                    }}
                  >
                    Añadir Mascota
                  </Typography>
                </div>
                <div style={ModalStyle.body} className="boxModalBody">
                  <form onSubmit={handleCreatePet}>
                    <TextField
                      className="input"
                      style={{ margin: "10px 0px" }}
                      label="Nombre de la Mascota"
                      size="small"
                      type="text"
                      required
                    />
                    <TextField
                      className="input"
                      style={{ margin: "10px 0px" }}
                      label="Edad"
                      size="small"
                      type="number"
                      inputProps={{ min: 1, max: 20 }}
                      required
                    />
                    <FormControl fullWidth style={{ margin: "10px 0px" }}>
                      <InputLabel size="small" id="sexo">
                        Sexo
                      </InputLabel>
                      <Select
                        labelId="sexo"
                        id="sexo"
                        value={sexo}
                        onChange={handleChangeSexo}
                        label="Sexo"
                        size="small"
                        required
                      >
                        <MenuItem value="Hembra">Hembra</MenuItem>
                        <MenuItem value="Macho">Macho</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth style={{ margin: "10px 0px" }}>
                      <InputLabel size="small" id="raza">
                        Raza
                      </InputLabel>
                      <Select
                        labelId="raza"
                        id="raza"
                        value={raza}
                        onChange={handleChangeRaza}
                        label="Raza"
                        size="small"
                        required
                      >
                        {razas.map((razaSel) => (
                          <MenuItem key={razaSel} value={razaSel}>
                            {razaSel}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth style={{ margin: "10px 0px" }}>
                      <InputLabel size="small" id="tamano">
                        Tamaño de la Mascota
                      </InputLabel>
                      <Select
                        labelId="tamano"
                        id="tamano"
                        value={tamano}
                        onChange={handleChangeTamano}
                        label="Tamaño"
                        size="small"
                        required
                      >
                        <MenuItem value="Grande">Grande</MenuItem>
                        <MenuItem value="Mediano">Mediano</MenuItem>
                        <MenuItem value="Pequeño">Pequeño</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth style={{ margin: "10px 0px" }}>
                      <InputLabel size="small" id="caracter">
                        Carácter
                      </InputLabel>
                      <Select
                        labelId="caracter"
                        id="caracter"
                        value={caracter}
                        onChange={handleChangeCaracter}
                        label="Carácter"
                        size="small"
                        required
                      >
                        <MenuItem value="Tímido">Tímido</MenuItem>
                        <MenuItem value="Amigable">Amigable</MenuItem>
                        <MenuItem value="Agresivo">Agresivo</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      className="input"
                      style={{ margin: "10px 0px" }}
                      label="Información Adicional"
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                    />
                    <p
                      style={{
                        color: "#A5A5A5",
                        marginBottom: "5px",
                        fontFamily: "Roboto-Regular",
                      }}
                    >
                      Subir una foto de su mascota (Obligatorio)
                    </p>
                    <div className="input-file">
                      <span className="input-file-text">{photoName}</span>
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#FFFF",
                            color: "#000",
                            width: "10srem",
                            marginRight: "10px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontFamily: "Roboto-bold",
                          }}
                          component="span"
                          onClick={showWidgetPhotoPet}
                        >
                          Choose File
                        </Button>
                      </label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        columnGap: "10px",
                      }}
                    >
                      <Button style={ModalStyle.boton} onClick={handleCloseAdd}>
                        Cerrar
                      </Button>
                      <Button
                        style={ModalStyle.boton}
                        type="submit"
                        className="botonDisabled"
                        disabled={photoPetUrl === ""}
                      >
                        Añadir
                      </Button>
                    </div>
                  </form>
                </div>
              </Box>
            </Modal>
          </>
        ) : (
          <></>
        )}

        <div className="pets">
          {pets?.length !== 0 ? (
            pets?.map((pet, i) => {
              return (
                <PetCard
                  ROLE={ROLE}
                  key={i}
                  user_id={pet.user_id}
                  _id={pet._id}
                  name={pet.name}
                  age={pet.age}
                  gender={pet.gender}
                  breed={pet.breed}
                  size={pet.size}
                  nature={pet.nature}
                  photo_url={pet.photo_url}
                  additional_information={pet.additional_information}
                />
              );
            })
          ) : (
            <div className="noPet">
              <h2 className="noPetTitle">Aun no tienes mascotas inscritas</h2>
              <img
                className="noPetImg"
                src={imagenes.img28}
                alt="perro pregunta"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
