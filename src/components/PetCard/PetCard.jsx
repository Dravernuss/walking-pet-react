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
import FormControl from "@mui/material/FormControl";
import "./_PetCard.scss";

const PetCard = ({ name, age, size, nature, photo, extraInfo }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [tamano, setTamano] = useState("");
  const [caracter, setCaracter] = useState("");

  const handleChangeTamano = (event) => {
    setTamano(event.target.value);
  };
  const handleChangeCaracter = (event) => {
    setCaracter(event.target.value);
  };
  return (
    <div>
      <Button className="Button" onClick={handleOpenEdit}>
        <img
          className="addButton"
          height="40px"
          width="40px"
          src={imagenes.img10}
          alt="..."
        ></img>
      </Button>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle.style}>
          <div style={ModalStyle.header}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Información de Mascota
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <form>
              <TextField
                className="input"
                margin="normal"
                label="Edad"
                size="small"
                type="number"
                inputProps={{ min: 1, max: 20 }}
              />
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
              <label style={{ color: "#A5A5A5", marginLeft: "10px" }}>
                Subir una foto de su mascota
              </label>
              <input className="input" size="small" type="file" />
              <label style={{ color: "#A5A5A5", marginLeft: "10px" }}>
                Subir una foto de su Carnet de Vacunación
              </label>
              <input className="input" size="small" type="file" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button style={ModalStyle.boton} onClick={handleCloseEdit}>
                  Cerrar
                </Button>
                <Button style={ModalStyle.boton} onClick={handleCloseEdit}>
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
                >
                  <p
                    id="child-modal-description"
                    style={{ marginBottom: "10px" }}
                  >
                    ¿Seguro que desea eliminar la informacion de la mascota?
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button style={ModalStyle.boton} onClick={handleCloseChild}>
                      Cancelar
                    </Button>
                    <Button style={ModalStyle.boton} onClick={handleCloseChild}>
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
          <img className="image" src={photo} alt="..."></img>
          <h2>{name}</h2>
          <p>Edad : {age} año</p>
          <p>Tamaño : {size}</p>
          <p>Caracter : {nature}</p>
        </div>
        <div className="extraInfo">
          <h2>Informacion Adicional:</h2>
          <p>{extraInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
