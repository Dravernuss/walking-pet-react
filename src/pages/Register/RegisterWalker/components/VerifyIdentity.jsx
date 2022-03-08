import React, { useEffect } from "react";
import "./_VerifyIdentity.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import imagenes from "../../../../images/imagenes";
import { useDispatch, useSelector } from "react-redux";
import { walkerToCreate2, walkerCreated } from "../../../../slices/walkerSlice";
import { useNavigate } from "react-router-dom";

export const VerifyIdentity = ({ changeView }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Input = styled("input")({
    display: "none",
  });

  const newWalkerCreated = useSelector(walkerCreated);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fotoDNI = "www.photo.com";
    await dispatch(walkerToCreate2({ ...newWalkerCreated, dni_url: fotoDNI }));
    changeView(2);
  };

  return (
    <div className="verifyIdentity">
      <div className="verifyIdentity__dni" />
      <p className="verifyIdentity__textDni">FOTO DE DNI</p>
      <form onSubmit={handleSubmit} className="verifyIdentity__upload">
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
          <Button variant="contained" className="nextStep" type="submit">
            Siguiente
          </Button>
        </div>
        <div className="footerStep">
          <img className="logoStep" src={imagenes.img1} alt="" />
        </div>
      </form>
    </div>
  );
};
