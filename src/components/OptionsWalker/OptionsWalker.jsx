import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./_OptionsWalker.scss";

const OptionsWalker = ({ aceptado, estado }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const handleOpenAccept = () => setOpenAccept(true);
  const handleCloseAccept = () => setOpenAccept(false);
  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = () => setOpenCancel(false);
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  return (
    <>
      <ButtonGroup className="group" variant="none">
        {aceptado === 0 ? (
          <></>
        ) : (
          <>
            <Button
              onClick={handleOpenAccept}
              disabled={aceptado === 1}
              className="botonC"
            >
              ✅
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
                className="boxModalOpcion"
              >
                <p
                  id="child-modal-description"
                  style={{ marginBottom: "10px" }}
                >
                  ¿Desea aceptar esta cita?
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: "10px",
                  }}
                >
                  <Button style={ModalStyle.boton} onClick={handleCloseAccept}>
                    Cancelar
                  </Button>
                  <Button style={ModalStyle.boton} onClick={handleCloseAccept}>
                    Aceptar
                  </Button>
                </div>
              </Box>
            </Modal>
          </>
        )}
        {aceptado === 1 ? (
          <></>
        ) : (
          <>
            <Button
              onClick={handleOpenCancel}
              disabled={aceptado === 0}
              className="botonC"
            >
              ❌
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
                className="boxModalOpcion"
              >
                <p
                  id="child-modal-description"
                  style={{ marginBottom: "10px" }}
                >
                  ¿Seguro que desea rechazar esta cita?
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: "10px",
                  }}
                >
                  <Button style={ModalStyle.boton} onClick={handleCloseCancel}>
                    Cancelar
                  </Button>
                  <Button style={ModalStyle.boton} onClick={handleCloseCancel}>
                    Aceptar
                  </Button>
                </div>
              </Box>
            </Modal>
          </>
        )}
      </ButtonGroup>
      <Button onClick={handleOpenDetails} className="botonT">
        Ver Detalles
      </Button>
      <Modal
        open={openDetails}
        onClose={handleCloseDetails}
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
              Detalles del Paseo
            </Typography>
          </div>
          <div style={ModalStyle.body} className="boxModalBody">
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
            {aceptado === 1 && estado === "Confirmado" ? (
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
                    className="boxModalOpcion"
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
export default OptionsWalker;
