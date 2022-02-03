import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import imagenes from "../../images/imagenes.jsx";
import "./_OptionsReport.scss";
import { useState } from "react";
import { Rating } from "@mui/material";

const OptionsReport = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openPaseador, setOpenPaseador] = useState(false);
  const [openCliente, setOpenCliente] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenPaseador = () => setOpenPaseador(true);
  const handleClosePaseador = () => setOpenPaseador(false);
  const handleOpenCliente = () => setOpenCliente(true);
  const handleCloseCliente = () => setOpenCliente(false);

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
        <Box className="modalRegisterStyleReport">
          <div className="modalRegisterHeaderReport">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Detalles del Reporte
            </Typography>
          </div>
          <div className="modalRegisterBodyReport">
            <div className="scroll">
              <div className="queryContainerReport">
                <div className="izquierdaReport">
                  <div
                    style={{
                      marginTop: "15px",
                    }}
                  >
                    <h2>Detalles del Paseo</h2>
                    <p>NOMBRE DEL PASEADOR: HELEN ARIAS</p>
                    <p>NOMBRE DEL CLIENTE: MANUEL BAELLA</p>
                    <p>DISTRITO: MIRAFLORES</p>
                    <p>DIRECCIÓN: Ac. Tomas Valle 3145 Miraflores</p>
                    <p>FECHA: 12-12-2021</p>
                    <p>HORARIO: 14:00-15:00 p.m</p>
                    <p>TIEMPO: 1 HORA</p>
                    <p>COSTO: S/16</p>
                    <p>Mascota(s):</p>
                    <p> *Balto</p>
                  </div>
                </div>
                <div className="derechaReport">
                  <h2>Reporte</h2>
                  <p>FECHA: 12-12-2021</p>
                  <p>HORA: 5:30 p.m</p>
                  <Rating
                    style={{ fontSize: "60px", margin: "15px" }}
                    name="read-only"
                    precision={0.5}
                    value={3.5}
                    size="large"
                    readOnly
                  />
                  <TextField
                    className="input"
                    InputProps={{
                      readOnly: true,
                    }}
                    margin="normal"
                    label="Cuéntanos acerca del Inconveniente"
                    defaultValue="Mi perro vino muy agitado y sediento, agradeceria que en una próxima oportunidad mantenga hidratado a mi perro."
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                  />
                  <img src={imagenes.img16} width="200" alt="" />
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid grey",
                  display: "flex",
                  flexDirection: "row",
                  displayWrap: "wrap",
                }}
              >
                <div style={{ width: "50%", padding: "2rem" }}>
                  <Typography
                    variant="h5"
                    fontFamily="Roboto-Bold"
                    fontSize="20px"
                  >
                    Mensaje al Paseador
                  </Typography>
                  <TextField
                    className="input"
                    margin="normal"
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={ModalStyle.boton}
                      onClick={handleOpenPaseador}
                    >
                      Enviar
                    </Button>
                    <Modal
                      open={openPaseador}
                      onClose={handleClosePaseador}
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
                          ¿Seguro que desea enviar este mensaje?
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleClosePaseador}
                          >
                            Cancelar
                          </Button>
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleClosePaseador}
                          >
                            Aceptar
                          </Button>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                </div>
                <div style={{ width: "50%", padding: "2rem" }}>
                  <Typography
                    variant="h5"
                    fontFamily="Roboto-Bold"
                    fontSize="20px"
                  >
                    Mensaje al Cliente
                  </Typography>

                  <TextField
                    className="input"
                    margin="normal"
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={ModalStyle.boton}
                      onClick={handleOpenCliente}
                    >
                      Enviar
                    </Button>
                    <Modal
                      open={openCliente}
                      onClose={handleCloseCliente}
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
                          ¿Seguro que desea enviar este mensaje?
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleCloseCliente}
                          >
                            Cancelar
                          </Button>
                          <Button
                            style={ModalStyle.boton}
                            onClick={handleCloseCliente}
                          >
                            Aceptar
                          </Button>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Button
                  style={ModalStyle.botonBig}
                  onClick={handleCloseDetails}
                >
                  Terminar Reporte
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default OptionsReport;
