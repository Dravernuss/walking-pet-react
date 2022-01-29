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

const Login = () => {
  return (
    <LayoutInicial>
      <LayoutForm title="Iniciar sesión">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
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
        </FormControl>
      </LayoutForm>
    </LayoutInicial>
  );
};

export default Login;
