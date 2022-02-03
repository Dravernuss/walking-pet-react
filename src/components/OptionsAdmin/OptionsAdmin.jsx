import { useState } from "react";
import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const OptionsAdmin = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  return (
    <>
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
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default OptionsAdmin;
