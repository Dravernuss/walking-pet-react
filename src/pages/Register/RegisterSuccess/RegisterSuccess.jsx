import React from "react";
import "./_RegisterSuccess.scss";
import { Link } from "react-router-dom";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import { Button } from "@mui/material";
import Imagenes from "../../../images/imagenes";

export const RegisterSuccess = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Gracias por registrarte">
        <div className="SuccessContainer">
          <p className="registerSuccess__message">
            ¡BIENVENIDO A LA COMUNIDAD DE WALKING PET!
          </p>
          <Button className="buttonSuccess" variant="contained">
            <Link to="/" style={{ textDecoration: "none" }}>
              Ir al inicio
            </Link>
          </Button>
          <div className="layoutForm__footer-small">
            <div className="layoutForm__footer-logo">
              <img className="logo" src={Imagenes.img1} alt="" />
            </div>
          </div>
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};
