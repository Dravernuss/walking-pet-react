import React from "react";
import "./_VerifyIdentity.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import imagenes from "../../../../images/imagenes";

export const VerifyIdentity = ({ changeView }) => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <div className="verifyIdentity">
      <div className="verifyIdentity__dni" />
      <p className="verifyIdentity__textDni">FOTO DE DNI</p>
      <div className="verifyIdentity__upload">
        <span className="verifyIdentity__upload-text">Choose file...</span>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            className="verifyIdentity__upload-input"
            id="contained-button-file"
            type="file"
          />

          <Button variant="contained" className="buttonChoose" component="span">
            Choose File
          </Button>
        </label>
        <p className="verifyIdentity__upload-information">
          Necesitamos la foto de tu DNI. Asegurate de que todos los detalles de
          la foto sean visibles.
        </p>

        <div className="nextContainer">
          <Button
            onClick={() => {
              changeView(2);
            }}
            variant="contained"
            className="nextStep"
          >
            Siguiente
          </Button>
        </div>
        <div className="footerStep">
          <img className="logoStep" src={imagenes.img1} alt="" />
        </div>
      </div>
    </div>
  );
};
