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
import Avatar from "@mui/material/Avatar";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";

import { useSelector, useDispatch } from "react-redux";
import { getOneWalkerAsync } from "../../slices/walkerSlice.js";

const distritos = [
  "San Miguel",
  "San Isidro",
  "Miraflores",
  "Breña",
  "Barranco",
  "San Borja",
  "La Molina",
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Input = styled("input")({
  display: "none",
});

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#99CC42",
    "&:hover": {
      backgroundColor: alpha("#99CC42", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#99CC42",
  },
}));

const WalkerProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //--------------REDUX---------------------------------------
  const ROLE = JSON.parse(localStorage.getItem("infoUser"))?.role;
  const dispatch = useDispatch();
  const _ID = "6227c043d3eeba7e892543f6";
  useEffect(() => {
    if (ROLE === "user") {
      dispatch(getOneWalkerAsync(_ID));
    }
  }, []);

  const thisWalker = useSelector((state) => state.walker.walker);
  // console.log("this", thisWalker);
  //----------------------------------------------------------

  return (
    <div className="walkerProfile">
      <NavBar />
      <div className="walker-Container">
        <div className="cardP">
          <Avatar src={thisWalker?.photo_url} className="card-img-topP" />
          <figcaption>
            <span>S./ {thisWalker?.price}</span>
          </figcaption>
          <h2 className="card-titleP">
            {thisWalker?.firstname} {thisWalker?.lastname}
          </h2>
          <Rating
            name="read-only"
            value={`${thisWalker?.rating}`}
            precision={0.5}
            size="large"
            readOnly
          />
          <p className="card-calificationP">{thisWalker?.rating}</p>
          <p className="card-textP">
            {thisWalker?.greeting}
            <br></br>
            <span>15 calificaciones | 19 paseos realizados</span>
          </p>
        </div>
        <div className="info-container">
          <p className="info">Presentación:</p>
          <p className="info-presentacion">{thisWalker?.presentation}</p>
          <p className="info">Disponible en:</p>
          <div className="chip-container">
            {thisWalker ? (
              thisWalker.avalaible_districts.map((district) => {
                return <Chip label={district} />;
              })
            ) : (
              <></>
            )}
          </div>
          <div>
            {ROLE === "user" ? (
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
              <>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem",
                    fontFamily: "Rambla-Regular",
                  }}
                >
                  <FormControlLabel
                    control={<GreenSwitch defaultChecked />}
                    label=""
                  />
                  <strong>DISPONIBLE?</strong>
                </div>
              </>
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
