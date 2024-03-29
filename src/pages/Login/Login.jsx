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

import Notifications from "../../components/notifications/Notifications";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserAsync,
  selectUserLoggued,
  alertUser,
} from "../../slices/userSlice";
import {
  loginWalkerAsync,
  selectWalkerLoggued,
  alertWalker,
} from "../../slices/walkerSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState("user");
  const ROLE = JSON.parse(localStorage.getItem("infoUser"))?.role;

  //------LOGIN USER-------------------------------------------
  const stateLoggedUser = JSON.parse(localStorage.getItem("infoUser"))?.token;
  const logguedUser = useSelector(selectUserLoggued); //Descubri que hace y porque es necesario
  const alertOnUser = useSelector(alertUser) ?? false;

  //------LOGIN WALKER-----------------------------------------
  const logguedWalker = useSelector(selectWalkerLoggued); // x2
  const alertOnWalker = useSelector(alertWalker) ?? false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elements } = e.target;

    const user = {
      email: elements[0].value,
      password: elements[2].value,
    };

    if (role === "user") {
      dispatch(loginUserAsync(user));
    } else if (role === "walker") {
      dispatch(loginWalkerAsync(user));
    }
  };

  useEffect(() => {
    if (stateLoggedUser) {
      if (ROLE === "user") navigate("/principalpage");
      else if (ROLE === "walker") navigate("/walkerprofile");
    }
  }, [stateLoggedUser]);

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
              control={<Radio data-test-id="login-radio-walker" />}
              label="Soy paseador"
              checked={role === "walker"}
              onClick={() => setRole("walker")}
            />
            <FormControlLabel
              className="radio_button"
              value="user"
              control={<Radio data-test-id="login-radio-user" />}
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
                data-test-id="login-email"
              />
              <TextField
                type="password"
                required
                id="password"
                label="Contraseña"
                data-test-id="login-password"
              />
            </Box>
            <Button
              data-test-id="login-success"
              type="submit"
              variant="contained"
              className="button_login"
            >
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
      <Notifications
        alertOnUser={alertOnUser}
        alertOnWalker={alertOnWalker}
        message="Correo o Contraseña Incorrectos"
      />
    </LayoutInicial>
  );
};

export default Login;
