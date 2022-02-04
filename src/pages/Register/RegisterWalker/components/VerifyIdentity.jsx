import React from "react";
import "./_VerifyIdentity.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const VerifyIdentity = ({ changeView }) => {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <div className="verifyIdentity">
      <div className="verifyIdentity__dni"></div>
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

          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFFF",
              color: "#000",
              width: "10srem",
              marginRight: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "Roboto-bold",
            }}
            component="span"
          >
            Choose File
          </Button>
        </label>
        <p className="verifyIdentity__upload-information">
          Necesitamos la foto de tu DNI. Asegurate de que todos los detalles de
          la foto sean visibles.
        </p>
      </div>

      <Button
        onClick={() => {
          changeView(2);
        }}
        variant="contained"
        style={{
          backgroundColor: "#FFFF",
          color: "#000",
          width: "12rem",
          padding: "10px 0",
          margin: "80px 0 0",
          borderRadius: "15px",
          fontSize: "19px",
          fontFamily: "Roboto-bold",
        }}
      >
        Siguiente
      </Button>
      <div className="layoutForm__footer-smallContainer">
        <div className="layoutForm__footer-logo" />
      </div>
    </div>
  );
};
