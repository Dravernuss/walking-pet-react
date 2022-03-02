import NavBar from "../../components/navBar/NavBar.jsx";
import imagenes from "../../images/imagenes.jsx";
import Button from "@mui/material/Button";
import "./_ClientProfile.scss";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import PetCard from "../../components/PetCard/PetCard.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { updateUserAsync, userToEdit } from "../../slices/userSlice.js";
import { myPets, getPetsByUserAsync } from "../../slices/petSlice.js";

const distritos = [
  "San Miguel",
  "San Isidro",
  "Miraflores",
  "Breña",
  "Barranco",
  "San Borja",
  "La Molina",
];

const razas = [
  "Criollo",
  "Golden Retriever",
  "Bulldog",
  "Boxer",
  "Pit Bull",
  "Pug",
  "Beagle",
  "Pastor Alemán",
  "Doberman",
  "Rottweiler",
  "Cocker",
  "Dálmata",
  "Shar Pei",
  "Otro",
];

const ClientProfile = () => {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
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

  const districtRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const user = useSelector((state) => state.user);
  const userID = JSON.parse(localStorage.getItem("infoUser"))._id;
  const handleOpen = () => {
    dispatch(userToEdit(user.userInfo)); // user -> user.userInfo
    setOpen(true);
  };
  const handleEditProfile = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const dataUser = {
      district: elements[0].value,
      address: elements[2].value,
      phone: elements[4].value,
    };
    dispatch(userToEdit(dataUser));
    await dispatch(updateUserAsync({ id: userID, ...dataUser }));
    // dispatch(getOneUserAsync(userID));
    handleClose();
  };

  // useEffect(() => {
  //   if (user && open === true) {
  //     console.log("USERRR", user);
  //     console.log("USERRRinfo", user.userInfo);
  //     const { district, address, phone } = user.userInfo;
  //     console.log("bola1", district, address, phone);
  //     console.log("ref", districtRef);

  //     // Initial value to edit form
  //     districtRef.current.value = district;
  //     addressRef.current.value = address;
  //     phoneRef.current.value = phone;
  //   }
  // }, [user]);

  //-------------------------------------------------------------
  ///////////////////////////////////////////////////////////////
  // Parte del REDUX TOOLKIT ------------PETS------------------

  useEffect(() => {
    dispatch(getPetsByUserAsync(userID));
  }, []);
  const pets = useSelector(myPets);
  console.log("PETS", pets);
  //------------------------------------------------------------------

  return (
    <div className="ClientProfile">
      <NavBar />
      <div className="client-Container">
        <div className="cardC">
          <Avatar
            sx={{ width: "240px", height: "240px" }}
            className="avatarC"
            src={user.userInfo.photo_url}
          />
          <h2 className="card-title">
            {user.userInfo.firstname} {user.userInfo.lastname}
          </h2>
        </div>
        <div className="info-containerC">
          <h2 className="info">Dirección:</h2>
          <p className="info-presentacionC">
            {user.userInfo.address}{" "}
            <strong>
              {}
              {user.userInfo.district}
            </strong>
          </p>
          <h2 className="info">Teléfono:</h2>
          <p className="info-presentacionC">{user.userInfo.phone}</p>

          <div>
            <div className="actions">
              <Button className="boton" href="/datesclient">
                <img className="dogButton" src={imagenes.img9} alt="..."></img>
                Ver mis Citas
              </Button>
              <Button className="boton" onClick={handleOpen}>
                <img className="dogButton" src={imagenes.img10} alt="..."></img>
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
                        margin="normal"
                        inputRef={districtRef}
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
                        margin="normal"
                        label="Dirección"
                        size="small"
                        type="text"
                        inputRef={addressRef}
                        required
                      />
                      <TextField
                        className="input"
                        margin="normal"
                        label="Teléfono de Contacto"
                        size="small"
                        type="text"
                        inputRef={phoneRef}
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
                        <span className="input-file-text">Choose file...</span>
                        <label htmlFor="contained-button-file">
                          <Input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                          />

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
                        <Button style={ModalStyle.boton} onClick={handleClose}>
                          Cerrar
                        </Button>
                        <Button
                          type="submit"
                          style={ModalStyle.boton}
                          // onClick={handleClose}
                        >
                          Finalizar
                        </Button>
                      </div>
                    </FormControl>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
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
            <form>
              <TextField
                className="input"
                margin="normal"
                label="Nombre de la Mascota"
                size="small"
                type="text"
              />
              <TextField
                className="input"
                margin="normal"
                label="Edad"
                size="small"
                type="number"
                inputProps={{ min: 1, max: 20 }}
              />
              <FormControl fullWidth style={{ marginTop: "20px" }}>
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
                  margin="normal"
                >
                  <MenuItem value="macho">Hembra</MenuItem>
                  <MenuItem value="macho">Macho</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginTop: "20px" }}>
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
                  margin="normal"
                >
                  {razas.map((razaSel) => (
                    <MenuItem key={razaSel} value={razaSel}>
                      {razaSel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginTop: "20px" }}>
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
                  margin="normal"
                >
                  <MenuItem value="macho">Grande</MenuItem>
                  <MenuItem value="macho">Mediano</MenuItem>
                  <MenuItem value="macho">Pequeño</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginTop: "20px" }}>
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
                  margin="normal"
                >
                  <MenuItem value="macho">Tímido</MenuItem>
                  <MenuItem value="macho">Amigable</MenuItem>
                  <MenuItem value="macho">Agresivo</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="input"
                margin="normal"
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
                Subir una foto de su mascota
              </p>
              <div className="input-file">
                <span className="input-file-text">Choose file...</span>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                  />

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
                <Button style={ModalStyle.boton} onClick={handleCloseAdd}>
                  Añadir
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <div className="pets">
        {pets?.map((pet) => {
          return (
            <PetCard
              name={pet.name}
              age={pet.age}
              size={pet.size}
              nature={pet.nature}
              photo_url={pet.photo_url}
              extraInfo={pet.additional_information}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientProfile;
