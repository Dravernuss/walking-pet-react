import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { convertTime24to12 } from "../../utils/functions";
import "./_OptionsWalker.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  datesWalker,
  getDateByIdAsync,
  updateDateAsync,
  dateToEdit,
  getDatesByWalkerAsync,
} from "../../slices/dateSlice.js";

// ACCEPTED ESTADOS POSIBLES
//0 : Rechazado
//1 : Aceptado
//2 : Sin Confirmar

const OptionsWalker = ({ accepted, date_state, index, id }) => {
  const navigate = useNavigate();
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

  //--------------REDUX-------------------------------------------
  const dispatch = useDispatch();
  const dateInfo = useSelector(datesWalker)[index];

  const handleCancelDate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateDateAsync({
        idDate: id,
        ...dateInfo,
        date_state: "Cancelado",
        accepted: 0,
      })
    );
    dispatch(getDatesByWalkerAsync(dateInfo.walker_id));
    handleCloseChild();
    handleCloseDetails();
  };

  const handleAcceptDate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateDateAsync({
        idDate: id,
        ...dateInfo,
        date_state: "Confirmado",
        accepted: 1,
      })
    );
    dispatch(getDatesByWalkerAsync(dateInfo.walker_id));
    handleCloseAccept();
  };

  const handleRejectDate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateDateAsync({
        idDate: id,
        ...dateInfo,
        date_state: "Rechazado",
        accepted: 0,
      })
    );
    dispatch(getDatesByWalkerAsync(dateInfo.walker_id));
    handleCloseAccept();
  };

  //--------------------------------------------------------------

  return (
    <>
      <ButtonGroup className="group" variant="none">
        {accepted === 0 ? (
          <></>
        ) : (
          <>
            <Button
              onClick={handleOpenAccept}
              disabled={accepted === 1}
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
                  <Button style={ModalStyle.boton} onClick={handleAcceptDate}>
                    Aceptar
                  </Button>
                </div>
              </Box>
            </Modal>
          </>
        )}
        {accepted === 1 ? (
          <></>
        ) : (
          <>
            <Button
              onClick={handleOpenCancel}
              disabled={accepted === 0}
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
                  <Button style={ModalStyle.boton} onClick={handleRejectDate}>
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
              NOMBRE DEL CLIENTE:{" "}
              <a
                className="toWalker"
                onClick={() => navigate(`/client/${dateInfo.user_id}`)}
              >
                {dateInfo?.user_name}
              </a>
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              NOMBRE DEL PASEADOR: {dateInfo?.walker_name}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              DISTRITO: {dateInfo?.district_selected}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              DIRECCIÓN: {dateInfo?.client_address}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              FECHA: {(dateInfo?.date_day).split("-").reverse().join("-")}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              HORARIO: {convertTime24to12(dateInfo?.date_hour)}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              TIEMPO: {dateInfo?.date_time}{" "}
              {dateInfo?.date_time === 1 ? "Hora" : "Horas"}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              COSTO: S/{dateInfo?.total_price}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              Mascota(s):
            </p>
            {dateInfo?.pets_name.map((petName, i) => {
              return (
                <p
                  key={i}
                  style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                >
                  * {petName}
                </p>
              );
            })}
            <p
              style={{
                margin: "15px 0",
                fontFamily: "Rambla-Regular",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              USTED DEBE PRESENTAR SU DOCUMENTO DE IDENTIDAD ANTES DE INICIAR EL
              PASEO
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
            {accepted === 1 && date_state === "Confirmado" ? (
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
                        onClick={handleCancelDate}
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
