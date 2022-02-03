import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ThanksForJoin = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      <p className="registerSuccess__message">Un administrador revisará tu solicitud y se te enviará un correo electrónico de confirmación lo más pronto posible.</p>
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
    </div>
  );
};