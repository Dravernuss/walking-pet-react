import React from "react";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, TextField } from "@mui/material";

export const AboutYou = () => {
  return (
    <>
      <div
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
              id="outlined-multiline-static"
              multiline
              style={{ width: "30rem" }}
              rows={3}
            />
            ¿Qué harías en caso de que el perro a tu cuidado se ponga agresivo?*
            <TextField
              id="outlined-multiline-static"
              multiline
              style={{ width: "30rem" }}
              rows={3}
            />
            ¿Cuáles son las herramientas necesarias que un cuidador canino debe
            llevar en cada paseo?*
            <TextField
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
              <FormControlLabel value={true} control={<Radio />} label="Sí" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
            <span style={{ fontSize: "24" }}>Subir una foto de perfil</span>
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
          >
            Finalizar
          </Button>
        </FormControl>
      </div>
      <div className="layoutForm__footer">
        <div className="layoutForm__footer-center">
          ¿Ya tienes cuenta? <Link to="/login"> Inicia Sesión</Link>
        </div>
        <div className="layoutForm__footer-logo" />
      </div>
    </>
  );
};
