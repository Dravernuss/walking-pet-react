import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./_OptionsReport.scss";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDateByIdAsync } from "../../slices/dateSlice.js";
import { convertTime24to12 } from "../../utils/functions.js";
import {
  getAllReportsAsync,
  updateCommentByAdminAsync,
} from "../../slices/commentSlice.js";

const OptionsReport = (reportsId) => {
  const dispatch = useDispatch();
  const [openDetails, setOpenDetails] = useState(false);
  const [openPaseador, setOpenPaseador] = useState(false);
  const [openCliente, setOpenCliente] = useState(false);
  const [reportSelected, setReportSelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  const [dateID, setDateID] = useState("");

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenPaseador = () => setOpenPaseador(true);
  const handleClosePaseador = () => setOpenPaseador(false);
  const handleOpenCliente = () => setOpenCliente(true);
  const handleCloseCliente = () => setOpenCliente(false);

  const allReports = useSelector((state) => state.comments.reports);

  const callingDate = async (id) => {
    const resDate = await dispatch(getDateByIdAsync(id));
    setDateSelected(resDate.payload[0]);
    return resDate;
  };

  useEffect(() => {
    const reportChosen = [];
    const x = allReports.map((report) => {
      if (report._id === reportsId.reportId) {
        reportChosen.push(report);
        setDateID(report.date_id);
      }
    });
    setReportSelected(reportChosen);
  }, [reportsId]);

  useEffect(() => {
    if (typeof dateID != "undefined") {
      const date = callingDate(dateID);
    }
  }, [dateID]);

  const [commentToWalker, setCommentToWalker] = useState(
    reportSelected[0]?.message_walker
  );
  const [commentToUser, setCommentToUser] = useState(
    reportSelected[0]?.message_user
  );

  const handleSendMessageUser = async (e) => {
    e.preventDefault();
    await dispatch(
      updateCommentByAdminAsync({
        idComment: reportsId.reportId,
        message_user: commentToUser,
        destinatary: "user",
      })
    );
    handleCloseCliente();
  };
  const handleSendMessageWalker = async (e) => {
    e.preventDefault();
    await dispatch(
      updateCommentByAdminAsync({
        idComment: reportsId.reportId,
        message_walker: commentToWalker,
        destinatary: "walker",
      })
    );
    handleClosePaseador();
  };

  const handleFinishReport = async (e) => {
    e.preventDefault();
    await dispatch(
      updateCommentByAdminAsync({
        idComment: reportsId.reportId,
        comment_state: "Revisado",
      })
    );
    await dispatch(getAllReportsAsync());
    handleCloseDetails();
  };

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
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Nombre del paseador: </strong> &nbsp;&nbsp;
                      {dateSelected ? dateSelected.walker_name : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Nombre de cliente: </strong> &nbsp;&nbsp;
                      {dateSelected ? dateSelected.user_name : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Distrito: </strong> &nbsp;&nbsp;
                      {dateSelected ? dateSelected.district_selected : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Dirección: </strong> &nbsp;&nbsp;
                      {dateSelected ? dateSelected.client_address : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Fecha:</strong> &nbsp;&nbsp;
                      {dateSelected
                        ? dateSelected.date_day.split("-").reverse().join("-")
                        : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Hora: </strong> &nbsp;&nbsp;
                      {dateSelected
                        ? convertTime24to12(dateSelected.date_hour)
                        : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Tiempo de paseo: </strong> &nbsp;&nbsp;
                      {dateSelected ? dateSelected.date_time : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Costo: </strong> &nbsp;&nbsp; S/
                      {dateSelected ? dateSelected.total_price : ""}
                    </p>
                    <p
                      style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}
                    >
                      <strong>Mascota(s):</strong>
                    </p>
                    {dateSelected
                      ? dateSelected.pets_name.map((petname, i) => {
                          return (
                            <li
                              key={i}
                              style={{
                                margin: "15px 0",
                                fontFamily: "Roboto-Regular",
                              }}
                            >
                              {petname}
                            </li>
                          );
                        })
                      : ""}
                  </div>
                </div>
                <div className="derechaReport">
                  <h2>Reporte</h2>
                  <p>
                    FECHA Y HORA DE REPORTE:{" "}
                    {reportSelected[0]
                      ? new Date(reportSelected[0].created_at)
                          .toLocaleString()
                          .split(" ")[0]
                      : ""}{" "}
                    {reportSelected[0]
                      ? new Date(reportSelected[0].created_at)
                          .toLocaleString()
                          .split(" ")[1]
                      : ""}
                  </p>
                  <Rating
                    style={{ fontSize: "60px", margin: "15px" }}
                    name="read-only"
                    precision={0.5}
                    value={reportSelected[0] ? reportSelected[0].rating : 0}
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
                    defaultValue={
                      reportSelected[0] ? reportSelected[0].comment : ""
                    }
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                  />
                  <img
                    src={
                      reportSelected[0]
                        ? reportSelected[0].report_photo_url
                        : ""
                    }
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid grey",
                  display: "flex",
                  flexDirection: "row",
                  displayWrap: "wrap",
                }}
                className="divMensajes"
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
                    data-test-id="message-walker"
                    defaultValue={
                      reportSelected[0] ? reportSelected[0].message_walker : ""
                    }
                    value={commentToWalker}
                    onChange={(e) => setCommentToWalker(e.target.value)}
                    className="input"
                    margin="normal"
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                    InputProps={{
                      readOnly: reportSelected[0]?.comment_state === "Revisado",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={
                        reportSelected[0]?.comment_state === "Revisado"
                          ? ModalStyle.botonDisabled
                          : ModalStyle.boton
                      }
                      onClick={handleOpenPaseador}
                      disabled={reportSelected[0]?.comment_state === "Revisado"}
                      data-test-id="send-walker"
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
                        className="boxModalOpcion"
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
                            columnGap: "10px",
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
                            onClick={handleSendMessageWalker}
                            data-test-id="walker-yes"
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
                    defaultValue={
                      reportSelected[0] ? reportSelected[0].message_user : ""
                    }
                    value={commentToUser}
                    onChange={(e) => setCommentToUser(e.target.value)}
                    className="input"
                    margin="normal"
                    size="small"
                    type="text"
                    multiline
                    rows={3}
                    InputProps={{
                      readOnly: reportSelected[0]?.comment_state === "Revisado",
                    }}
                    data-test-id="message-user"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={
                        reportSelected[0]?.comment_state === "Revisado"
                          ? ModalStyle.botonDisabled
                          : ModalStyle.boton
                      }
                      onClick={handleOpenCliente}
                      disabled={reportSelected[0]?.comment_state === "Revisado"}
                      data-test-id="send-user"
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
                        className="boxModalOpcion"
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
                            columnGap: "10px",
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
                            onClick={handleSendMessageUser}
                            data-test-id="user-yes"
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
                  style={
                    reportSelected[0]?.comment_state === "Revisado"
                      ? ModalStyle.botonDisabled
                      : ModalStyle.botonBig
                  }
                  onClick={handleFinishReport}
                  disabled={reportSelected[0]?.comment_state === "Revisado"}
                  data-test-id="report-finished"
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
