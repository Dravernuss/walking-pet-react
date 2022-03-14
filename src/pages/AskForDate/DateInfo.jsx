import NavBar from "../../components/navBar/NavBar";
import "./_DateInfo.scss";
import { useSelector } from "react-redux";
import { convertTime24to12 } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect } from "react";
const DateInfo = () => {
  const dateInfo = useSelector((state) => state.dates?.date);
  const data = useSelector((state) => state.dates);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data.date) navigate("/principalpage");
  }, []);
  return (
    <div className="dateInfoContainer">
      <NavBar />
      <div className="root">
        <div className="h1Div">
          <h1 className="title">¡GRACIAS POR SOLICITAR UNA CITA!</h1>
        </div>
        <div className="infoDate">
          <p style={{ margin: "15px 0", fontFamily: "Roboto-Regular" }}>
            NOMBRE DEL CLIENTE: {dateInfo?.user_name}
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
            FECHA: {dateInfo?.date_day.split("-").reverse().join("-")}
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
              margin: "5px 0",
              fontFamily: "Rambla-Regular",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ESPERANDO CONFIRMACIÓN
          </p>
          <p
            style={{
              fontFamily: "Rambla-Regular",
              textAlign: "center",
            }}
          >
            PAGO A CONTRAENTREGA
          </p>
        </div>
      </div>
      <Button
        variant="text"
        className="botonRegresar"
        onClick={() => navigate("/principalpage")}
      >
        Regresar al Menu Principal
      </Button>
    </div>
  );
};
export default DateInfo;
