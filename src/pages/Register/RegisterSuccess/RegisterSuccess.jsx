import React from "react";
import LayoutInicial from "../../../components/LayoutInicial/LayoutInicial";
import LayoutForm from "../../../components/LayoutForm/LayoutForm";
import { Button} from "@mui/material";

export const RegisterSuccess = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Gracias por registrarte">
        <p className="registerCliente__message">¡BIENVENIDO A LA COMUNIDAD DE WALKING PET!</p>
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
          Registrarse
        </Button>
        <div className="layoutForm__footer">
          <div className="layoutForm__footer-logo" />
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};
