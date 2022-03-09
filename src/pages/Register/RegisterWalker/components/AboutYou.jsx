import React, { useState } from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button, Input, TextField } from "@mui/material";
import imagenes from "../../../../images/imagenes";
// import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CircularProgress from "@mui/material/CircularProgress";
import {
  // walkerToCreate3,
  walkerCreated2,
  createWalkerAsync,
} from "../../../../slices/walkerSlice";
import "./_AboutYou.scss";
import { useDispatch, useSelector } from "react-redux";

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
      photo_url: "www.facephoto.com",
    };

    await dispatch(createWalkerAsync({ ...newWalkerCreated, ...finalData }));
    changeView(3);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="layoutForm__scroll"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
            {/* <p style={{ fontSize: "24" }}>Subir una foto de perfil</p> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label className="inputFileContent" htmlFor="profile123">
                <AddAPhotoIcon className="photoIcon" fontSize="medium" /> Subir
                una foto de perfil
              </label>
              <Input
                style={{ display: "none" }}
                accept=".jpg,.jpeg,.png"
                type="file"
                id="profile123"
                // onChange={}
              ></Input>
              {/* {true && (
                <CircularProgress
                  size="25px"
                  style={{
                    position: "absolute",
                    marginLeft: "180px",
                    marginTop: "-13px",
                    color: "#3493C2",
                  }}
                />
              )} */}
            </div>
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFFF",
              color: "#000",
              width: "35%",
              padding: "10px 0",
              margin: "30px auto ",
              borderRadius: "15px",
              fontSize: "16px",
              fontFamily: "Roboto-bold",
            }}
            type="submit"
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
