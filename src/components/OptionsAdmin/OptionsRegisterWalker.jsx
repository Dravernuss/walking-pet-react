import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./_OptionsRegisterWalker.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateWalkerAsync } from "../../slices/walkerSlice.js";

const OptionsRegisterWalker = ({ walker, estado, uploaded }) => {
  const dispatch = useDispatch();
  const [usingApi, setUsingApi] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenAccept = () => setOpenAccept(true);
  const [adminComment, setAdminComment] = useState("");
  useEffect(() => {
    if (usingApi) {
      const updated = updatedWalkers(usingApi);
    }
  }, [usingApi]);

  const handleCloseAccept = (id) => {
    if (typeof id === "string") {
      setUsingApi({
        id: id,
        status: {
          registration_state: "Aprobado",
          avalaible: true,
          admin_comment: adminComment,
        },
      });
    }
    setOpenAccept(false);
  };

  async function updatedWalkers(data) {
    let resAllWalkers = "";
    if (data) {
      resAllWalkers = await dispatch(
        updateWalkerAsync({ id: data.id, ...data.status })
      );
      uploaded();
    }
    return resAllWalkers;
  }

  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = (id) => {
    if (typeof id === "string") {
      setUsingApi({
        id: id,
        status: {
          registration_state: "Rechazado",
          avalaible: false,
          admin_comment: adminComment,
        },
      });
    }
    setOpenCancel(false);
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
                    <p>NOMBRE: {`${walker.firstname} ${walker.lastname}`}</p>
                    <p>CORREO: {walker.email}</p>
                    <p>TELÉFONO: {walker.phone}</p>
                    <p>CIUDAD: {walker.district}</p>
                    <p>DIRECCION:{walker.address}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h2>DOCUMENTO DE IDENTIDAD</h2>
                    <img
                      style={{
                        maxWidth: "200px",
                        minHeight: "200px",
                      }}
                      src={walker.dni_url}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>FOTO DE PERFIL</h2>
                    <img
                      src={walker.photo_url}
                      style={{
                        minWidth: "150px",
                        maxWidth: "190px",
                        maxHeight: "200px",
                      }}
                      alt=""
                    />
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
                      defaultValue={walker.experience}
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
                      defaultValue={walker.reaction}
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
                      defaultValue={walker.tools}
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
                        {walker.certification ? (
                          <>
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
                          </>
                        ) : (
                          <>
                            <FormControlLabel
                              disabled
                              value="si"
                              control={<Radio />}
                              label="Sí"
                            />
                            <FormControlLabel
                              disabled
                              value="no"
                              control={<Radio checked />}
                              label="No"
                            />
                          </>
                        )}
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="derecha-bottom">
                    <TextField
                      className="input"
                      margin="normal"
                      label="Añadir sugerencia..."
                      value={adminComment}
                      onChange={(e) => {
                        setAdminComment(e.target.value);
                      }}
                      size="small"
                      type="text"
                      multiline
                      rows={4}
                      disabled={!estado}
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
                        className="buttonOR"
                      >
                        Volver
                      </Button>
                      <Button
                        disabled={!estado}
                        style={
                          estado ? ModalStyle.boton : ModalStyle.botonDisabled
                        }
                        onClick={handleOpenAccept}
                        className="buttonOR"
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
                          className="boxModalOpcion"
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
                              columnGap: "10px",
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
                              onClick={() => handleCloseAccept(walker._id)}
                            >
                              Aceptar
                            </Button>
                          </div>
                        </Box>
                      </Modal>

                      <Button
                        style={
                          estado ? ModalStyle.boton : ModalStyle.botonDisabled
                        }
                        onClick={handleOpenCancel}
                        disabled={!estado}
                        className="buttonOR"
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
                          className="boxModalOpcion"
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
                              columnGap: "10px",
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
                              onClick={() => handleCloseCancel(walker._id)}
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
