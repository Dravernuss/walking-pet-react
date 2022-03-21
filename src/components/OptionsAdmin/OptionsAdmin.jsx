import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ModalStyle from "../../components/ModalStyle/ModalStyle.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const OptionsAdmin = (dateId) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [dateSelected, setDateSelected] = useState('')

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const allDates = useSelector((state) => state.dates.allDates);
  
  useEffect(() => {
    const dateChosen = []
    const x = allDates.map(date => {
      if(date._id === dateId.dateId){
        dateChosen.push(date) 
      } 
    })
    console.log(dateChosen)
    setDateSelected(dateChosen) 
  }, [dateId])
  
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
              <strong>Nombre de cliente:</strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].user_name:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Nombre de paseador: </strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].walker_name:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Dirección:</strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].client_address:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Fecha: </strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].date_day:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Horario:</strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].date_hour:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Tiempo: </strong> &nbsp;&nbsp;
              {dateSelected[0]?dateSelected[0].date_time:''}hr
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Costo: </strong> &nbsp;&nbsp;
              S/{dateSelected[0]?dateSelected[0].total_price:''}
            </p>
            <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            <strong>Mascota(s):</strong>
            </p>
            {dateSelected[0]?dateSelected[0].pets_name.map(petname => {
              return (
              <li style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
                {petname}
              </li>
                )
            }):''}
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
