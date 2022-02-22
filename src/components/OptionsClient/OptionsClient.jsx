import { useState } from "react";
import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import imagenes from "../../images/imagenes.jsx";
import { styled } from "@mui/material/styles";
import "./_OptionsClient.scss";
import "../../pages/DatesClient/_DatesClient.scss";

const OptionsClient = ({ calificado, estado }) => {
  const [value, setValue] = useState(0);
  const [openDetails, setOpenDetails] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [openCalificar, setOpenCalificar] = useState(false);
  const [openReporte, setOpenReporte] = useState(false);
  const [openCalificacionRecibida, setOpenCalificacionRecibida] =
    useState(false);
  const [openReporteRecibido, setOpenReporteRecibido] = useState(false);
  const handleOpenCalificar = () => setOpenCalificar(true);
  const handleCloseCalificar = () => setOpenCalificar(false);
  const handleOpenReporte = () => {
    setOpenCalificar(false);
    setOpenReporte(true);
  };
  const handleCloseReporte = () => setOpenReporte(false);
  const handleReturnCalificar = () => {
    setOpenReporte(false);
    setOpenCalificar(true);
  };
  const handleEnviarReporte = () => {
    setOpenReporte(false);
    setOpenReporteRecibido(true);
  };
  const handleEndReporte = () => setOpenReporteRecibido(false);
  const handleEnviarCalificacion = () => {
    setOpenCalificar(false);
    setOpenCalificacionRecibida(true);
  };
  const handleEndCalificacion = () => setOpenCalificacionRecibida(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <Button
        onClick={handleOpenCalificar}
        className="botonT"
        disabled={calificado}
      >
        Calificar
      </Button>
      <Modal
        open={openCalificar}
        onClose={handleCloseCalificar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle.style} style={{ width: "600px" }}>
          <div style={ModalStyle.header}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Califica a Helen Arias
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <Typography fontFamily="Roboto-Bold">
              Tu opinión es muy importante para nosotros:
            </Typography>
            <div
              style={{
                widht: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Rating
                style={{ fontSize: "60px" }}
                name="simple-controlled"
                precision={0.5}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="large"
              />
            </div>
            <TextField
              className="input"
              margin="normal"
              label="Deja un comentario..."
              size="small"
              type="text"
              multiline
              rows={4}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "1rem 0",
                fontFamily: "Roboto-Regular",
              }}
            >
              <p style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
                ¿Algún inconveniente?
              </p>
              <p className="reportHere" onClick={handleOpenReporte}>
                Repórtalo aquí
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleCloseCalificar}>
                Cancelar
              </Button>
              <Button
                style={ModalStyle.boton}
                onClick={handleEnviarCalificacion}
              >
                Enviar
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openCalificacionRecibida}
        onClose={handleEndCalificacion}
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
              Calificación Recibida
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <Typography
              variant="h3"
              fontSize="40px"
              textAlign="center"
              style={{ margin: "3rem" }}
            >
              ¡Gracias por calificar a Helen Arias!
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleEndCalificacion}>
                Cerrar
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                borderTop: "1px solid grey",
              }}
            >
              <img
                style={{ marginTop: "15px" }}
                src={imagenes.img1}
                alt="..."
              ></img>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openReporte}
        onClose={handleCloseReporte}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle.style} style={{ width: "600px" }}>
          <div style={ModalStyle.header}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Reporte sobre Helen Arias
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <Typography fontFamily="Roboto-Bold">
              Cuéntanos acera del incoveniente:
            </Typography>
            <div
              style={{
                widht: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Rating
                style={{ fontSize: "60px" }}
                name="simple-controlled"
                precision={0.5}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                size="large"
              />
            </div>
            <TextField
              className="input"
              margin="normal"
              size="small"
              type="text"
              multiline
              rows={6}
            />
            <p
              style={{
                color: "#A5A5A5",
                marginBottom: "5px",
                fontFamily: "Roboto-Regular",
              }}
            >
              ¿Desea agregar alguna imagen?
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
                justifyContent: "space-around",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleReturnCalificar}>
                Regresar
              </Button>
              <Button style={ModalStyle.boton} onClick={handleEnviarReporte}>
                Enviar
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openReporteRecibido}
        onClose={handleEndReporte}
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
              Reporte Recibido
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <Typography
              variant="h3"
              fontSize="25px"
              fontWeight="bold"
              textAlign="center"
              style={{ margin: "3rem" }}
            >
              Un administrador revisará tu reporte y se comunicará contigo lo
              antes posible.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleEndReporte}>
                Cerrar
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                borderTop: "1px solid grey",
              }}
            >
              <img
                style={{ marginTop: "15px" }}
                src={imagenes.img1}
                alt="..."
              ></img>
            </div>
          </div>
        </Box>
      </Modal>

      <Button onClick={handleOpenDetails} className="botonT">
        Ver Detalles
      </Button>
      <Modal
        open={openDetails}
        onClose={handleCloseDetails}
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
              Detalles del Paseo
            </Typography>
          </div>
          <div style={ModalStyle.body}>
            <Typography m={2}>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                NOMBRE DEL CLIENTE: MANUEL BAELLA
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                DISTRITO: MIRAFLORES
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                DIRECCIÓN:Av. Tomas Valle 3145 Miraflores
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                FECHA: 16-12-2021
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                HORARIO: 16:00-17:00 p.m
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                TIEMPO: 1 HORA
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                COSTO: S/16
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                Mascota(s):
              </p>
              <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                * Balto
              </p>
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleCloseDetails}>
                Volver
              </Button>
            </div>
            {estado === "Confirmado" || estado === "Sin confirmar" ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  borderTop: "1px solid grey",
                }}
              >
                <Button onClick={handleOpenChild}>Cancelar Cita</Button>
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
                      ¿Seguro que desea cancelar su cita?
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
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
                        onClick={handleCloseChild}
                      >
                        Aceptar
                      </Button>
                    </div>
                  </Box>
                </Modal>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default OptionsClient;
