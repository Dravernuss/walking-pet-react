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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
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

            <TextField required id="email" label="Correo electrónico" />
            <TextField required id="password" label="Contraseña" />
            <Button
              variant="contained"
              style={{ backgroundColor: "#FFFF", color: "#000" }}
            >
              Ingresar
            </Button>
          </FormControl>
        </Box>
      </LayoutForm>
    </LayoutInicial>
  );
};

export default Login;
