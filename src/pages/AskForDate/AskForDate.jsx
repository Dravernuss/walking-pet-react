import { Rating } from "@mui/material";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../images/imagenes";
import "./_AskForDate.scss";
export const AskForDate = () => {
  return (
    <div className="askForDate">
      <NavBar />
      <div className="askForDate__container">
        <div className="askForDate__container-title">
          <h1>SOLICITA UNA CITA</h1>
        </div>
        <div className="askForDate__container-data">
          <div className="askForDate__container-data-card">
            <p className="askForDate__container-data-card-selected">
              Paseador seleccionado:
              <span className="askForDate__container-data-card-selected-title">
                Helen Arias
              </span>
            </p>
            <div className="askForDate__container-data-card-description">
              <img
                className="card-img-topP"
                src={imagenes.img3}
                alt="..."
              ></img>
              <div className="askForDate__container-data-card-description-text">
                <Rating
                  name="read-only"
                  value={4.9}
                  precision={0.5}
                  size="large"
                  readOnly
                />
                <span style={{ lineHeight: "30px" }}>4.9</span>

                <p className="askForDate__container-data-card-description-text-info">
                  Hola soy Helen, me encantan los perritos y pasar tiempo con
                  ellos. En nuestro tiempo juntos pasearemos por algun parque,
                  haremos ejercicio y jugaremos mucho :D
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="askForDate__container-fares"></div>
      </div>
    </div>
  );
};
