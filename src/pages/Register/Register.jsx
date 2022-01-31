import React from "react";
import LayoutInicial from "../../components/LayoutInicial/LayoutInicial";
import { Link } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, TextField } from "@mui/material";
export const Register = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Registro">
        <div className="layoutForm__scroll">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="paseador"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="paseador"
                control={<Radio />}
                label="Soy paseador"
              />
              <FormControlLabel
                value="cliente"
                control={<Radio />}
                label="Soy cliente"
              />
            </RadioGroup>
            <Box
              component="div"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "" },
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                style={{ width: "45%" }}
                required
                id="name"
                label="Nombre"
              />
              <TextField
                style={{ width: "45%" }}
                required
                id="lastName"
                label="Apellido"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="email"
                label="Correo electrónico"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="password"
                label="Contraseña"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="confirmPassword"
                label="Confirmar contraseña"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="phone"
                label="Teléfono Fijo/Móvil"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="city"
                label="Ciudad"
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="address"
                label="Dirección"
              />
            </Box>
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
          </FormControl>
          </div>
          <div className="layoutForm__footer">
            <div className="layoutForm__footer-center">
                ¿Ya tienes cuenta? <Link to="/login"> Inicia Sesión</Link>
            </div>
            <div className="layoutForm__footer-logo"/>
          </div>
      </LayoutForm>
    </LayoutInicial>
  );
};
