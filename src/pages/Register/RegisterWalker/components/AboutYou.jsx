import React, { useState } from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button, Input, TextField } from "@mui/material";
import imagenes from "../../../../images/imagenes";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {
  walkerCreated2,
  createWalkerAsync,
} from "../../../../slices/walkerSlice";
import "./_AboutYou.scss";
import { useDispatch, useSelector } from "react-redux";
import { cloudinary_constant } from "../../../../utils/functions";

export const AboutYou = ({ changeView }) => {
  const dispatch = useDispatch();
  const newWalkerCreated = useSelector(walkerCreated2);

  const [certification, setCertification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const finalData = {
      experience: elements[0].value,
      reaction: elements[3].value,
      tools: elements[6].value,
      certification: certification,
      photo_url: photoWalkerUrl,
    };

    await dispatch(createWalkerAsync({ ...newWalkerCreated, ...finalData }));
    changeView(3);
  };

  //------------------------------------------------------
  const [photoWalkerUrl, setPhotoWalkerUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetPhotoWalker = () => {
    window.cloudinary.openUploadWidget(
      cloudinary_constant("walker_photos"),
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url, original_filename, format } = result.info;
          setPhotoWalkerUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
      }
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="layoutForm__scroll"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl>
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            noValidate
            autoComplete="off"
          >
            Cuéntanos sobre tu experiencia previa cuidando o paseando perros*
            <TextField
              required
              id="outlined-multiline-static"
              multiline
              style={{ width: "30rem" }}
              rows={3}
            />
            ¿Qué harías en caso de que el perro a tu cuidado se ponga agresivo?*
            <TextField
              required
              id="outlined-multiline-static"
              multiline
              style={{ width: "30rem" }}
              rows={3}
            />
            ¿Cuáles son las herramientas necesarias que un cuidador canino debe
            llevar en cada paseo?*
            <TextField
              required
              id="outlined-multiline-static"
              multiline
              style={{ width: "30rem" }}
              rows={3}
            />
            ¿Cuentas con alguna certificación para cuidar perror? No es
            obligatoria para participar en esta plataforma*
            <RadioGroup
              //   row
              style={{
                width: "100%",
                // justifyContent: "space-between",
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="paseador"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={true}
                onChange={() => setCertification(true)}
                checked={certification === true}
                control={<Radio />}
                label="Sí"
              />
              <FormControlLabel
                value={false}
                checked={certification === false}
                onChange={() => setCertification(false)}
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
            <p style={{ fontSize: "24" }}>Subir una foto de perfil</p>
            <div className="input-file" style={{ height: "3.5rem" }}>
              <span className="input-file-text">{photoName}</span>
              <label htmlFor="contained-button-file">
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
                  onClick={showWidgetPhotoWalker}
                >
                  Choose File
                </Button>
              </label>
            </div>
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFFF",
              color: "#000",
              width: "35%",
              padding: "10px 0",
              margin: "0px auto 20px auto ",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Roboto-bold",
            }}
            type="submit"
            disabled={photoWalkerUrl === ""}
          >
            Finalizar
          </Button>
        </FormControl>
      </form>
      <div className="layoutForm__footer">
        <div className="layoutForm__footer-center">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" style={{ marginLeft: "3px" }}>
            {" "}
            Inicia Sesión
          </Link>
        </div>
        <div className="layoutForm__footer-logo">
          <img className="logo" src={imagenes.img1} alt="" />
        </div>
      </div>
    </>
  );
};
