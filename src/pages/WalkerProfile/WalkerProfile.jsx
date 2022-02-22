import Rating from "@mui/material/Rating";
import NavBar from "../../components/navBar/NavBar.jsx";
import Chip from "../../components/Chip/Chip.jsx";
import imagenes from "../../images/imagenes.jsx";
import Button from "@mui/material/Button";
import "./_WalkerProfile.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Input = styled("input")({
  display: "none",
});

const distritos = [
  "San Miguel",
  "San Isidro",
  "Miraflores",
  "Breña",
  "Barranco",
  "San Borja",
  "La Molina",
];

const WalkerProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="walkerProfile">
      <NavBar />
      <div className="walker-Container">
        <div className="cardP">
          <img className="card-img-topP" src={imagenes.img3} alt="..."></img>
          <figcaption>
            <span>S./ 16</span>
          </figcaption>
          <h2 className="card-titleP">Helen Arias</h2>
          <Rating
            name="read-only"
            value={4.9}
            precision={0.5}
            size="large"
            readOnly
          />
          <p className="card-calificationP">4.9</p>
          <p className="card-textP">
            Los perros tambien son el mejor amigo de las mujeres.
            <br></br>
            <span>15 calificaciones | 19 paseos realizados</span>
          </p>
        </div>
        <div className="info-container">
          <p className="info">Presentación:</p>
          <p className="info-presentacion">
            Hola soy Helen, me encantan los perritos y pasar tiempo con ellos.
            En nuestro tiempo juntos pasearemos por algun parque, haremos
            ejercicio y jugaremos mucho :D
          </p>
          <p className="info">Disponible en:</p>
          <div className="chip-container">
            <Chip label="La Molina" />
            <Chip label="San Isidro" />
            <Chip label="San Miguel" />
            <Chip label="Miraflores" />
            <Chip label="Barranco" />
          </div>
          <div>
            {true ? (
              <div className="actions">
                <Button className="boton" href="/askForDate">
                  <img
                    className="dogButton"
                    src={imagenes.img9}
                    alt="..."
                  ></img>
                  Pedir una cita
                </Button>
              </div>
            ) : (
              <div className="actions">
                <Button className="boton" href="/dateswalker">
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
                    <div style={ModalStyle.body} className="boxModalBody">
                      <form>
                        <TextField
                          className="input"
                          label="Tarifa por hora"
                          size="small"
                          type="number"
                          margin="normal"
                          inputProps={{ min: 1, max: 100 }}
                        />
                        <Autocomplete
                          multiple
                          id="checkboxes-tags-demo"
                          disableCloseOnSelect
                          options={distritos}
                          renderOption={(props, option, { selected }) => (
                            <li {...props}>
                              <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                              />
                              {option}
                            </li>
                          )}
                          getOptionLabel={(option) => option}
                          defaultValue={[
                            distritos[2],
                            distritos[4],
                            distritos[6],
                            distritos[1],
                            distritos[5],
                          ]}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              className="input"
                              label="Distritos en los que trabajará"
                              size="small"
                              margin="normal"
                            />
                          )}
                        />
                        <TextField
                          className="input"
                          margin="normal"
                          label="Saludo"
                          size="small"
                          type="text"
                          multiline
                          rows={3}
                        />
                        <TextField
                          className="input"
                          margin="normal"
                          label="Mensaje de Presentación"
                          size="small"
                          type="text"
                          multiline
                          rows={3}
                        />
                        <p
                          style={{
                            color: "#A5A5A5",
                            marginBottom: "5px",
                            fontFamily: "Roboto-Regular",
                          }}
                        >
                          Subir una foto para su perfil
                        </p>
                        <div className="input-file">
                          <span className="input-file-text">
                            Choose file...
                          </span>
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
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleClose}
                          >
                            Cerrar
                          </Button>
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleClose}
                          >
                            Finalizar
                          </Button>
                        </div>
                      </form>
                    </div>
                  </Box>
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="valorations">
        <h2>Valoraciones sobre Helen Arias</h2>
        <div className="rows">
          <div>
            <h3>Manuel Baella</h3>
            <p>Es genial y super amable. Sin duda la volveria a contratar.</p>
          </div>
          <Rating
            name="read-only"
            value={4.9}
            precision={0.5}
            size="large"
            readOnly
          />
        </div>
        <div className="rows">
          <div>
            <h3>Fernanda Alva</h3>
            <p>Se nota que tiene una muy buena vibra, mi perrito la adora.</p>
          </div>
          <Rating
            name="read-only"
            value={4.9}
            precision={0.5}
            size="large"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default WalkerProfile;
