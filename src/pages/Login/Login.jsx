import "./_Login.scss";
import LayoutInicial from "../../components/LayoutInicial/LayoutInicial";
import { Link } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import imagenes from "../../images/imagenes.jsx";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Iniciar sesión">
        <FormControl className="formContainer">
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
              className="radio_button"
              value="paseador"
              control={<Radio />}
              label="Soy paseador"
            />
            <FormControlLabel
              className="radio_button"
              value="cliente"
              control={<Radio />}
              label="Soy cliente"
            />
          </RadioGroup>
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required id="email" label="Correo electrónico" />
            <TextField
              type="password"
              required
              id="password"
              label="Contraseña"
            />
          </Box>
          <Button
            variant="contained"
            className="button_login"
            style={{}}
            href="/principalpage"
          >
            Ingresar
          </Button>
        </FormControl>
        <div className="layoutForm__footer">
          <div className="layoutForm__footer-options">
            <p className="layoutForm__footer-link">
              <Link to="/">Olvidé mi contraseña</Link>
            </p>
            <div>
              ¿Aún no tienes cuenta? <Link to="/register"> Regístrate</Link>
            </div>
          </div>
          <div className="layoutForm__footer-logo">
            <img className="logo" src={imagenes.img1} width="200" alt="" />
          </div>
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};

export default Login;
