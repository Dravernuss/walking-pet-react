import { Button } from "@mui/material";
import imagenes from "../../images/imagenes";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import FormControl from "@mui/material/FormControl";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";
import "./_PetCard.scss";

import { useDispatch } from "react-redux";
import {
  deletePetAsync,
  getPetsByUserAsync,
  updatePetAsync,
} from "../../slices/petSlice.js";
import { cloudinary_constant } from "../../utils/functions.js";

const PetCard = ({
  name,
  age,
  size,
  nature,
  gender,
  breed,
  photo_url,
  additional_information,
  _id,
  user_id,
  ROLE,
}) => {
  const pet = {
    name,
    age,
    size,
    nature,
    gender,
    breed,
    photo_url,
    additional_information,
    _id,
    user_id,
  };
  const [openEdit, setOpenEdit] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const [tamano, setTamano] = useState("");
  const [caracter, setCaracter] = useState("");
  const handleChangeTamano = (event) => {
    setTamano(event.target.value);
  };
  const handleChangeCaracter = (event) => {
    setCaracter(event.target.value);
  };

  //----------------useState Cloudinary-------------------------------
  const [photoPetUrl, setPhotoPetUrl] = useState();
  const [photoName, setPhotoName] = useState();
  //---------------------------------------------------------------------
  const Input = styled("input")({
    display: "none",
  });

  //------REDUX---------------PET---------------------------
  const dispatch = useDispatch();

  const handleOpenEdit = () => {
    setPhotoPetUrl(pet.photo_url);
    setPhotoName("Choose file...");
    setOpenEdit(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const dataPet = {
      age: elements[0].value,
      size: elements[2].value,
      nature: elements[4].value,
      additional_information: elements[6].value,
      photo_url: photoPetUrl,
    };
    await dispatch(updatePetAsync({ id: _id, ...dataPet }));
    await dispatch(getPetsByUserAsync(user_id));
    setOpenEdit(false);
  };

  const handleDelete = async () => {
    await dispatch(deletePetAsync(_id));
    await dispatch(getPetsByUserAsync(user_id));
    handleCloseEdit();
    handleCloseChild();
  };

  //------CLOUDINARY-----------------------------------------------------
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

  //-----------------------------------------------

  return (
    <div>
      {ROLE === "user" ? (
        <>
          <Button
            className="ButtonLapiz"
            style={{ borderRadius: "50%" }}
            onClick={handleOpenEdit}
          >
            <img className="addButton" src={imagenes.img10} alt="..."></img>
          </Button>
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
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
                  Información de {name}
                </Typography>
              </div>
              <div style={ModalStyle.body} className="boxModalBody">
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="input"
                    style={{ margin: "10px 0px" }}
                    label="Edad"
                    size="small"
                    type="number"
                    defaultValue={pet?.age}
                    inputProps={{ min: 1, max: 20 }}
                    data-test-id="edit-age"
                  />
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <InputLabel size="small" id="tamano">
                      Tamaño de la Mascota
                    </InputLabel>
                    <Select
                      labelId="tamano"
                      id="tamano"
                      onChange={handleChangeTamano}
                      label="Tamaño"
                      size="small"
                      defaultValue={pet?.size}
                      data-test-id="edit-size"
                    >
                      <MenuItem value="Grande" data-test-id="size-big">
                        Grande
                      </MenuItem>
                      <MenuItem value="Mediano" data-test-id="size-medium">
                        Mediano
                      </MenuItem>
                      <MenuItem value="Pequeño" data-test-id="size-small">
                        Pequeño
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth style={{ margin: "10px 0px" }}>
                    <InputLabel size="small" id="caracter">
                      Carácter
                    </InputLabel>
                    <Select
                      labelId="caracter"
                      id="caracter"
                      onChange={handleChangeCaracter}
                      label="Carácter"
                      size="small"
                      defaultValue={pet?.nature}
                      data-test-id="edit-nature"
                    >
                      <MenuItem value="Tímido" data-test-id="nature-shy">
                        Tímido
                      </MenuItem>
                      <MenuItem value="Amigable" data-test-id="nature-friendly">
                        Amigable
                      </MenuItem>
                      <MenuItem value="Agresivo" data-test-id="nature-agresive">
                        Agresivo
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    style={{ margin: "10px 0px" }}
                    className="input"
                    label="Información Adicional"
                    size="small"
                    type="text"
                    multiline
                    rows={4}
                    defaultValue={pet?.additional_information}
                    data-test-id="edit-info"
                  />
                  <p
                    style={{
                      color: "#A5A5A5",
                      marginBottom: "5px",
                      fontFamily: "Roboto-Regular",
                    }}
                  >
                    Cambiar foto de su mascota
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
                        data-test-id="choose-file"
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
                    <Button style={ModalStyle.boton} onClick={handleCloseEdit}>
                      Cerrar
                    </Button>
                    <Button
                      style={ModalStyle.boton}
                      type="submit"
                      disabled={photoPetUrl === ""}
                      className="botonDisabled"
                      data-test-id="edit-finished"
                    >
                      Finalizar
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Button onClick={handleOpenChild} data-test-id="delete-pet">
                      Eliminar Mascota
                    </Button>
                  </div>

                  <Modal
                    open={openChild}
                    onClose={handleCloseChild}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                  >
                    <Box
                      sx={{
                        ...ModalStyle.style,
                        width: 400,
                        backgroundColor: "white",
                        border: "1px solid black",
                        padding: "2rem",
                        borderRadius: "20px",
                        textAlign: "center",
                      }}
                      className="boxModalOpcion"
                    >
                      <p
                        id="child-modal-description"
                        style={{ marginBottom: "10px" }}
                      >
                        ¿Seguro que desea eliminar la información de {name}?
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          columnGap: "10px",
                        }}
                      >
                        <Button
                          style={ModalStyle.boton}
                          onClick={handleCloseChild}
                        >
                          Cancelar
                        </Button>
                        <Button
                          style={ModalStyle.boton}
                          onClick={handleDelete}
                          data-test-id="delete-finished"
                        >
                          Aceptar
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                </form>
              </div>
            </Box>
          </Modal>
        </>
      ) : (
        <div className="walkerView" />
      )}
      <div className="petcard">
        <div className="petInfo">
          <Avatar className="image" alt="Remy Sharp" src={photo_url}>
            <PetsIcon className="imageIcon" />
          </Avatar>
          <div className="petInfo__text">
            <h2>{name}</h2>
            <div className="petInfo__text__subtext">
              <div>
                <p>
                  Edad : {age} {age > 1 ? "años" : "año"}
                </p>
                <p>Sexo: {gender}</p>
                <p>Raza: {breed}</p>
              </div>
              <div>
                <p>Tamaño : {size}</p>
                <p>Caracter : {nature}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="extraInfo">
          <h2>Informacion Adicional:</h2>
          <div className="extraInfo__text">
            <p>{additional_information}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
