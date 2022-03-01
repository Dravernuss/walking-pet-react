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

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync, selectUserLoggued } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const stateLogged = JSON.parse(localStorage.getItem("infoUser"))?.token;
  console.log(stateLogged);
  const dispatch = useDispatch();
  const loggued = useSelector(selectUserLoggued);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const user = {
      email: elements[0].value,
      password: elements[2].value,
    };
    if (role === "user") {
      dispatch(loginUserAsync(user));
    }
    // else dispatch(loginWalkerAsync(user));
  };
  useEffect(() => {
    console.log("useEffect2", loggued);
    stateLogged && navigate("/principalpage");
  }, [stateLogged]);

  const [role, setRole] = useState("user");

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
              value="walker"
              control={<Radio />}
              label="Soy paseador"
              checked={role === "walker"}
              onClick={() => setRole("walker")}
            />
            <FormControlLabel
              className="radio_button"
              value="user"
              control={<Radio />}
              label="Soy cliente"
              checked={role === "user"}
              onClick={() => setRole("user")}
            />
          </RadioGroup>
          <form onSubmit={handleSubmit}>
            <Box
              component="div"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="email"
                type="email"
                label="Correo electrónico"
              />
              <TextField
                type="password"
                required
                id="password"
                label="Contraseña"
              />
            </Box>
            <Button type="submit" variant="contained" className="button_login">
              Ingresar
            </Button>
          </form>
        </FormControl>
        <div className="layoutForm__footer">
          <div className="layoutForm__footer-options">
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
