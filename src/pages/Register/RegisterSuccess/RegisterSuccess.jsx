import React from "react";
import "./_RegisterSuccess.scss";
import { Link } from "react-router-dom";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import { Button} from "@mui/material";

export const RegisterSuccess = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Gracias por registrarte">
        <p className="registerSuccess__message">¡BIENVENIDO A LA COMUNIDAD DE WALKING PET!</p>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FFFF",
            color: "#000",
            width: "35%",
            padding: "10px 0",
            margin: "30px auto 0",
            borderRadius: "15px",
            fontSize: "16px",
            fontFamily: "Roboto-bold",
          }}
        >
          <Link to="/" style={{  textDecoration: 'none'}}>
            Ir al inicio
          </Link>
        </Button>
        <div className="layoutForm__footer-small">
          <div className="layoutForm__footer-logo" />
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};
