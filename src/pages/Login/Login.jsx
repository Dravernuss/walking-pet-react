import "./_Login.scss";
import LayoutInicial from "../../components/LayoutInicial/LayoutInicial";
import { Link } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Iniciar sesión">
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
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required id="email" label="Correo electrónico" />
            <TextField required id="password" label="Contraseña" />
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FFFF",
              color: "#000",
              maxWidth: "300px",
              margin: "10px auto 0",
            }}
          >
            Ingresar
          </Button>
        </FormControl>
        <div className="login__footer">
          <div className="login__footer-options">
            <p className="login__footer-link">
              <Link to="/">Olvidé mi contraseña</Link>
            </p>
            <div>
              ¿Aún no tienes cuenta? <Link to="/register"> Regístrate</Link>
            </div>
          </div>
          <div className="login__footer-logo">{/* LOGO*/}</div>
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};

export default Login;
