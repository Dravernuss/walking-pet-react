import React, { useEffect } from "react";
import "./_VerifyIdentity.scss";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import imagenes from "../../../../images/imagenes";
import { useDispatch, useSelector } from "react-redux";
import { walkerToCreate2, walkerCreated } from "../../../../slices/walkerSlice";
import { useNavigate } from "react-router-dom";
import { cloudinary_constant } from "../../../../utils/functions";
import { useState } from "react";

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
    await dispatch(
      walkerToCreate2({ ...newWalkerCreated, dni_url: photoDniUrl })
    );
    changeView(2);
  };

  //-------------------CLOUDINARY----------------------------------------
  const [photoDniUrl, setPhotoDniUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetPhotoDni = () => {
    window.cloudinary.openUploadWidget(
      cloudinary_constant("dni_photos"),
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, original_filename, format } = result.info;
          setPhotoDniUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
      }
    );
  };

  return (
    <div className="verifyIdentity">
      {photoDniUrl === "" ? (
        <div className="verifyIdentity__dni" />
      ) : (
        <img className="verifyIdentity__dni" src={photoDniUrl} />
      )}

      <p className="verifyIdentity__textDni">FOTO DE DNI</p>
      <form onSubmit={handleSubmit} className="verifyIdentity__upload">
        <span className="verifyIdentity__upload-text">{photoName}</span>
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            className="buttonChoose"
            component="span"
            onClick={showWidgetPhotoDni}
            data-test-id="choose-file"
          >
            Choose File
          </Button>
        </label>
        <p className="verifyIdentity__upload-information">
          Necesitamos la foto de tu DNI. Asegurate de que todos los detalles de
          la foto sean visibles.
        </p>

        <div className="nextContainer">
          <Button
            variant="contained"
            className="nextStep"
            type="submit"
            disabled={photoDniUrl === ""}
            data-test-id="next"
          >
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
