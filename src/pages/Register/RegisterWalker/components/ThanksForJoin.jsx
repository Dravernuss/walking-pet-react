import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Imagenes from "../../../../images/imagenes";

export const ThanksForJoin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <p
        className="registerWalker__message"
        style={{
          fontFamily: "Roboto-Regular",
          fontSize: "25px",
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        Un administrador revisará tu solicitud y se te enviará un correo
        electrónico de confirmación lo más pronto posible.
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#FFFF",
          color: "#000",
          width: "40%",

          padding: "10px 0",
          margin: "30px auto 0",
          borderRadius: "15px",
          fontSize: "16px",
          fontFamily: "Roboto-bold",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
          Ir al inicio
        </Link>
      </Button>
      <div className="layoutForm__footer-small">
        <div className="layoutForm__footer-logo">
          <img className="logo" src={Imagenes.img1} alt="" />
        </div>
      </div>
    </div>
  );
};
