import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import imagenes from "../../images/imagenes.jsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./_OptionsRegisterWalker.scss";
import { useState } from "react";

const OptionsRegisterWalker = ({ estado }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenAccept = () => setOpenAccept(true);
  const handleCloseAccept = () => setOpenAccept(false);
  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = () => setOpenCancel(false);
  return (
    <>
      <Button onClick={handleOpenDetails} className="botonT">
        Detalles
      </Button>
      <Modal
        open={openDetails}
        onClose={handleCloseDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalRegisterStyle">
          <div className="modalRegisterHeader">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Detalles del Paseador
            </Typography>
          </div>
          <div className="modalRegisterBody">
            <div className="scroll">
              <div className="queryContainer">
                <div className="izquierda">
                  <div
                    style={{
                      marginTop: "15px",
                    }}
                  >
                    <p>NOMBRE: Helen Arias</p>
                    <p>CORREO: helenarias@gmail.com</p>
                    <p>TELÉFONO: 997684321</p>
                    <p>CIUDAD: Lima</p>
                    <p>DIRECCION: Calle Las Amapolas 123</p>
                  </div>
                  <div>
                    <h2>DOCUMENTO DE IDENTIDAD</h2>
                    <img src={imagenes.img14} width="300" alt="" />
                  </div>
                  <div>
                    <h2>FOTO DE PERFIL</h2>
                    <img src={imagenes.img15} width="250" alt="" />
                  </div>
                </div>
                <div className="derecha">
                  <div className="derecha-top">
                    <TextField
                      className="input"
                      InputProps={{
                        readOnly: true,
                      }}
                      margin="normal"
                      label="Cuéntanos sobre tu experiencia previa paseando o cuidando perros"
                      defaultValue="Llevo paseando perros desde hace ya 2 años de manera independiente, me llevo muy bien con las mascotas de mis clientes, y siempre tengo mucho cuidado con ellos."
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                    />
                    <TextField
                      className="input"
                      InputProps={{
                        readOnly: true,
                      }}
                      margin="normal"
                      label="¿Qué harías en caso de que el perro a tu cuidado se ponga agresivo?"
                      defaultValue="Buscaria alejarlo de la situación que lo esta incomodando, siempre teniendo cuidado de que no se lastime  él mismo ni a nadie más."
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                    />
                    <TextField
                      className="input"
                      InputProps={{
                        readOnly: true,
                      }}
                      margin="normal"
                      label="¿Cuáles son las herramientas necesarias que un cuidador canino debe llevar en cada paseo?"
                      defaultValue="Un bozal extra en caso extremo, agua para las mascotas, papeles toalla , croquetas de perro para incentivarlos."
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                    />
                    <FormControl>
                      <p style={{}}>
                        ¿Cuentas con alguna certificación para cuidar perros? No
                        es obligatoria para participar en esta plataforma.
                      </p>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          disabled
                          value="si"
                          control={<Radio checked />}
                          label="Sí"
                        />
                        <FormControlLabel
                          disabled
                          value="no"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="derecha-bottom">
                    <TextField
                      className="input"
                      margin="normal"
                      label="Añadir sugerencia..."
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        columnGap: "1rem",
                      }}
                    >
                      <Button
                        style={ModalStyle.boton}
                        onClick={handleCloseDetails}
                      >
                        Volver
                      </Button>
                      <Button
                        disabled={estado !== "Sin Revisar"}
                        style={
                          estado === "Sin Revisar"
                            ? ModalStyle.boton
                            : ModalStyle.botonDisabled
                        }
                        onClick={handleOpenAccept}
                      >
                        Aceptar
                      </Button>
                      <Modal
                        open={openAccept}
                        onClose={handleCloseAccept}
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
                            ¿Seguro que desea aceptar esta solicitud?
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Button
                              style={ModalStyle.boton}
                              onClick={handleCloseAccept}
                            >
                              Cancelar
                            </Button>
                            <Button
                              style={ModalStyle.boton}
                              onClick={handleCloseAccept}
                            >
                              Aceptar
                            </Button>
                          </div>
                        </Box>
                      </Modal>
                      <Button
                        style={
                          estado === "Sin Revisar"
                            ? ModalStyle.boton
                            : ModalStyle.botonDisabled
                        }
                        onClick={handleOpenCancel}
                        disabled={estado !== "Sin Revisar"}
                      >
                        Rechazar
                      </Button>
                      <Modal
                        open={openCancel}
                        onClose={handleCloseCancel}
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
                            ¿Seguro que desea rechazar esta solicitud?
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Button
                              style={ModalStyle.boton}
                              onClick={handleCloseCancel}
                            >
                              Cancelar
                            </Button>
                            <Button
                              style={ModalStyle.boton}
                              onClick={handleCloseCancel}
                            >
                              Rechazar
                            </Button>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default OptionsRegisterWalker;
