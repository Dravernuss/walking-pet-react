import { useEffect, useState } from "react";
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
import { convertTime24to12 } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import {
  datesUser,
  getDateByIdAsync,
  updateDateAsync,
  getDatesByUserAsync,
  dateToEdit,
} from "../../slices/dateSlice.js";
import {
  updateWalkerAsync,
  getOneWalkerAsync,
} from "../../slices/walkerSlice.js";
import { createCommentAsync } from "../../slices/commentSlice.js";
import { new_rating } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { cloudinary_constant } from "../../utils/functions.js";

const OptionsClient = ({ date_id, index }) => {
  const navigate = useNavigate();
  const walker = useSelector((state) => state.walker?.walker);
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);
  const [openDetails, setOpenDetails] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [openCalificar, setOpenCalificar] = useState(false);
  const [openReporte, setOpenReporte] = useState(false);
  const [openCalificacionRecibida, setOpenCalificacionRecibida] =
    useState(false);
  const [openReporteRecibido, setOpenReporteRecibido] = useState(false);
  const handleOpenCalificar = () => {
    setType("Comment");
    dispatch(getOneWalkerAsync(dateInfo.walker_id));
    setOpenCalificar(true);
  };
  const handleCloseCalificar = () => setOpenCalificar(false);
  const handleOpenReporte = () => {
    setType("Report");
    setPhotoReportUrl("");
    setPhotoName("Chose file...");
    setOpenCalificar(false);
    setOpenReporte(true);
  };
  const handleCloseReporte = () => setOpenReporte(false);
  const handleReturnCalificar = () => {
    setType("Comment");
    setOpenReporte(false);
    setOpenCalificar(true);
  };
  const handleEnviarReporte = () => {
    setOpenReporte(false);
    setOpenReporteRecibido(true);
  };
  const handleEndReporte = async () => {
    await dispatch(getDatesByUserAsync(dateInfo?.user_id));
    setOpenReporteRecibido(false);
  };
  const handleEnviarCalificacion = () => {
    setOpenCalificar(false);
    setOpenCalificacionRecibida(true);
  };
  const handleEndCalificacion = async () => {
    await dispatch(getDatesByUserAsync(dateInfo?.user_id));
    setOpenCalificacionRecibida(false);
  };
  const handleOpenChild = () => setOpenChild(true);
  const handleCloseChild = () => setOpenChild(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const Input = styled("input")({
    display: "none",
  });

  //---------------REDUX------------------------
  const dispatch = useDispatch();
  const dateInfo = useSelector(datesUser)[index];

  const handleCancelDate = async (e) => {
    e.preventDefault();
    await dispatch(
      updateDateAsync({
        idDate: date_id,
        ...dateInfo,
        date_state: "Cancelado",
        accepted: 0,
      })
    );
    dispatch(dateToEdit({ date_state: "Cancelado" }));
    dispatch(getDatesByUserAsync(dateInfo.user_id));
    handleCloseChild();
    handleCloseDetails();
  };

  const handleCalificate = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const dataCalificate = {
      date_id: date_id,
      user_id: dateInfo.user_id,
      user_name: dateInfo.user_name,
      walker_id: dateInfo.walker_id,
      rating: value,
      comment: elements[11].value,
      type: "Comment",
    };
    const sub_rating = Number(walker?.rating);
    await dispatch(
      updateWalkerAsync({
        id: dateInfo.walker_id,
        rating: new_rating(sub_rating, walker?.total_rating, value),
        total_rating: walker?.total_rating + 1,
      })
    );
    await dispatch(createCommentAsync(dataCalificate));
    await dispatch(
      updateDateAsync({
        idDate: date_id,
        calificated: true,
      })
    );
    handleEnviarCalificacion();
  };

  const handleReport = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    console.log("reporteee", elements[11].value);
    const dataReport = {
      date_id: date_id,
      user_id: dateInfo.user_id,
      user_name: dateInfo.user_name,
      walker_id: dateInfo.walker_id,
      rating: value,
      comment: elements[11].value,
      type: "Report",
      report_photo_url: photoReportUrl,
    };
    const sub_rating = Number(walker?.rating);
    await dispatch(
      updateWalkerAsync({
        id: dateInfo.walker_id,
        rating: new_rating(sub_rating, walker?.total_rating, value),
        total_rating: walker?.total_rating + 1,
      })
    );
    await dispatch(createCommentAsync(dataReport));
    await dispatch(
      updateDateAsync({
        idDate: date_id,
        calificated: true,
      })
    );
    handleEnviarReporte();
  };

  //---------------CLOUDINARY-----------------------------

  const [photoReportUrl, setPhotoReportUrl] = useState();
  const [photoName, setPhotoName] = useState();

  const showWidgetPhotoReport = () => {
    window.cloudinary.openUploadWidget(
      cloudinary_constant("report_photos"),
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, original_filename, format } = result.info;
          setPhotoReportUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
      }
    );
  };

  return (
    <>
      <Button
        // onClick={handleOpenCalificar}
        className="botonT"
        disabled={
          !(dateInfo?.date_state === "Confirmado" && dateInfo?.paid === false)
        }
      >
        Pagar
      </Button>
      <Button
        onClick={handleOpenCalificar}
        className="botonT"
        disabled={
          !(!dateInfo?.calificated && dateInfo?.date_state === "Realizado")
        }
      >
        Calificar
      </Button>
      <Modal
        open={openCalificar}
        onClose={handleCloseCalificar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={ModalStyle.style}
          style={{ width: "600px" }}
          className="boxModal"
        >
          <div style={ModalStyle.header}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontFamily: "Roboto-Bold",
              }}
            >
              Califica a {dateInfo?.walker_name}
            </Typography>
          </div>
          <form
            onSubmit={handleCalificate}
            style={ModalStyle.body}
            className="boxModalBody"
          >
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
                className="stars"
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
              required
              className="input"
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
              className="parrafos"
            >
              <p className="inconveniente">¿Algún inconveniente?</p>
              <p className="reportHere" onClick={handleOpenReporte}>
                Repórtalo aquí
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                columnGap: "10px",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleCloseCalificar}>
                Cancelar
              </Button>
              <Button
                style={ModalStyle.boton}
                className="botonDisabled"
                type="submit"
                disabled={value === 0}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openCalificacionRecibida}
        onClose={handleEndCalificacion}
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
              Calificación Recibida
            </Typography>
          </div>
          <div style={ModalStyle.body} className="boxModalBody">
            <Typography
              variant="h3"
              fontSize="40px"
              textAlign="center"
              className="revisar"
            >
              ¡Gracias por calificar a {dateInfo?.walker_name}!
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
                className="logoOC"
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
              Reporte sobre Helen Arias
            </Typography>
          </div>
          <form
            onSubmit={handleReport}
            style={ModalStyle.body}
            className="boxModalBody"
          >
            <Typography fontFamily="Roboto-Bold" className="cuentanos">
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
                className="stars"
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
              <span className="input-file-text">{photoName}</span>
              <label htmlFor="contained-button-file">
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
                  onClick={showWidgetPhotoReport}
                >
                  Choose File
                </Button>
              </label>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                columnGap: "10px",
              }}
            >
              <Button style={ModalStyle.boton} onClick={handleReturnCalificar}>
                Regresar
              </Button>
              <Button
                style={ModalStyle.boton}
                className="botonDisabled"
                type="submit"
                disabled={value === 0}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openReporteRecibido}
        onClose={handleEndReporte}
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
              Reporte Recibido
            </Typography>
          </div>
          <div style={ModalStyle.body} className="boxModalBody">
            <Typography
              variant="h3"
              fontSize="25px"
              fontWeight="bold"
              textAlign="center"
              className="revisar"
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
              <img className="logoOC" src={imagenes.img1} alt="..."></img>
            </div>
          </div>
        </Box>
      </Modal>

      <Button onClick={handleOpenDetails} className="botonT">
        Detalles
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
              NOMBRE DEL CLIENTE: {dateInfo?.user_name}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
              NOMBRE DEL PASEADOR:{" "}
              <a
                className="toWalker"
                onClick={() => navigate(`/walker/${dateInfo.walker_id}`)}
              >
                {dateInfo?.walker_name}
              </a>
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
              EL PASEADOR DEBERÁ PRESENTAR SU DOCUMENTO DE IDENTIDAD ANTES DE
              INICIAR EL PASEO
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
            {dateInfo?.date_state === "Confirmado" ||
            dateInfo?.date_state === "Sin Confirmar" ? (
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

export default OptionsClient;
