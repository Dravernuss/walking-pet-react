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
  petToEdit,
} from "../../slices/petSlice.js";

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

  const Input = styled("input")({
    display: "none",
  });

  //------REDUX---------------PET---------------------------
  const dispatch = useDispatch();

  const handleOpenEdit = () => {
    // dispatch(petToEdit(pet));
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
    };
    // dispatch(petToEdit(dataPet));
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

  //-----------------------------------------------

  return (
    <div>
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
                margin="normal"
                label="Edad"
                size="small"
                type="number"
                defaultValue={pet?.age}
                inputProps={{ min: 1, max: 20 }}
              />
              <FormControl fullWidth style={{ marginTop: "20px" }}>
                <InputLabel size="small" id="tamano">
                  Tamaño de la Mascota
                </InputLabel>
                <Select
                  labelId="tamano"
                  id="tamano"
                  onChange={handleChangeTamano}
                  label="Tamaño"
                  size="small"
                  margin="normal"
                  defaultValue={pet?.size}
                >
                  <MenuItem value="Grande">Grande</MenuItem>
                  <MenuItem value="Mediano">Mediano</MenuItem>
                  <MenuItem value="Pequeño">Pequeño</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginTop: "20px" }}>
                <InputLabel size="small" id="caracter">
                  Carácter
                </InputLabel>
                <Select
                  labelId="caracter"
                  id="caracter"
                  onChange={handleChangeCaracter}
                  label="Carácter"
                  size="small"
                  margin="normal"
                  defaultValue={pet?.nature}
                >
                  <MenuItem value="Tímido">Tímido</MenuItem>
                  <MenuItem value="Amigable">Amigable</MenuItem>
                  <MenuItem value="Agresivo">Agresivo</MenuItem>
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
                defaultValue={pet?.additional_information}
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
              <p
                style={{
                  color: "#A5A5A5",
                  marginBottom: "5px",
                  fontFamily: "Roboto-Regular",
                }}
              >
                Subir una foto de su Carnet de Vacunación
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
                <Button style={ModalStyle.boton} onClick={handleCloseEdit}>
                  Cerrar
                </Button>
                <Button style={ModalStyle.boton} type="submit">
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
                <Button onClick={handleOpenChild}>Eliminar Mascota</Button>
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
                    ¿Seguro que desea eliminar la informacion de {name}?
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: "10px",
                    }}
                  >
                    <Button style={ModalStyle.boton} onClick={handleCloseChild}>
                      Cancelar
                    </Button>
                    <Button style={ModalStyle.boton} onClick={handleDelete}>
                      Aceptar
                    </Button>
                  </div>
                </Box>
              </Modal>
            </form>
          </div>
        </Box>
      </Modal>
      <div className="petcard">
        <div className="petInfo">
          {/* <img className="image" src={photo} alt="..."></img> */}
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
