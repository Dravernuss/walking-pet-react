import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import LayoutInicial from "../../components/LayoutInicial/LayoutInicial";
import { Link, useNavigate } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import { Box, Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { distritos } from "../../utils/constants";
import imagenes from "../../images/imagenes.jsx";
import "./_Register.scss";
import Notifications from "../../components/notifications/Notifications";
import {
  createUserAsync,
  alertUserRegister,
  userCreated,
} from "../../slices/userSlice";
import {
  alertWalkerRegister,
  getOneWalkerByEmailAsync,
} from "../../slices/walkerSlice";
import { useSelector, useDispatch } from "react-redux";
import { walkerToCreate1 } from "../../slices/walkerSlice";
import { create } from "@mui/material/styles/createTransitions";

export const Register = () => {
  const alertOnUser = useSelector(alertUserRegister) ?? false;
  const alertOnWalker = useSelector(alertWalkerRegister) ?? false;
  const userStateCreated = useSelector(userCreated);

  // const [alertOnWalker, setAlertOneWalker] = useState(false);
  const [type, setType] = useState("cliente");
  const [distrito, setDistrito] = useState("");
  const token = JSON.parse(localStorage.getItem("infoUser"))?.token;
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  const handleChangeDistrict = (event) => {
    setDistrito(event.target.value);
  };

  const handleChangeRadio = (event) => {
    setType(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmitTwo = async (data) => {
    if (type === "paseador") {
      const existe = await dispatch(getOneWalkerByEmailAsync(data.email));
      if (!existe.payload) {
        await dispatch(walkerToCreate1(data));
        navigate("/registerWalker");
      }
    } else if (type === "cliente") {
      await dispatch(createUserAsync(data));
    }
  };
  useEffect(() => {
    if (userStateCreated) navigate("/registerSuccess");
  }, [userStateCreated]);

  useEffect(() => {
    token && navigate("/principalpage");
  }, []);

  //-----REDUX------CREATE USER-------------------------------
  const dispatch = useDispatch();

  //----------------------------------------------------------

  return (
    <LayoutInicial>
      <LayoutForm title="Registro">
        <div className="layoutForm__scroll">
          <form
            onSubmit={handleSubmit((data) =>
              handleSubmitTwo({ ...data, district: distrito })
            )}
          >
            <FormControl className="formContainerRegister">
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                }}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={type}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="paseador"
                  control={<Radio data-test-id="register-walker" />}
                  label="Soy paseador"
                />
                <FormControlLabel
                  value="cliente"
                  control={<Radio data-test-id="register-user" />}
                  label="Soy cliente"
                />
              </RadioGroup>
              <Box
                className="boxRegister"
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
                  required
                  className="nombreTextfield"
                  id="name"
                  label="Nombre"
                  {...register("firstname")}
                  data-test-id="register-name"
                />
                <TextField
                  required
                  className="apellidoTextfield"
                  id="lastName"
                  label="Apellido"
                  {...register("lastname")}
                  data-test-id="register-lastname"
                />
                <TextField
                  style={{ width: "100%" }}
                  required
                  type="email"
                  id="email"
                  label="Correo electrónico"
                  {...register("email")}
                  data-test-id="register-email"
                />
                <TextField
                  style={{ width: "100%" }}
                  type="password"
                  label="Contraseña"
                  {...register("password", {
                    required: "Password is required!",
                  })}
                  data-test-id="register-password"
                />
                {errors.password && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "8px",
                      marginTop: "-10px",
                      marginBottom: "8px",
                    }}
                  >
                    Ingrese su contraseña
                  </p>
                )}
                <TextField
                  style={{ width: "100%" }}
                  type="password"
                  id="confirmPassword"
                  label="Confirmar contraseña"
                  data-test-id="register-password-confirm"
                  {...register("passwordConfirmation", {
                    required: "Please confirm password!",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    },
                  })}
                />
                {errors.passwordConfirmation && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "8px",
                      marginTop: "-10px",
                      marginBottom: "8px",
                    }}
                  >
                    Las contraseñas no coinciden
                  </p>
                )}
                <TextField
                  style={{ width: "100%" }}
                  required
                  type="number"
                  id="phone"
                  label="Teléfono Fijo/Móvil"
                  {...register("phone")}
                  data-test-id="register-phone"
                />
                <FormControl style={{ width: "100%", margin: "10px" }}>
                  <InputLabel id="distrito-label">Distrito*</InputLabel>
                  <Select
                    labelId="distrito-label"
                    id="distrito"
                    data-test-id="register-select"
                    value={distrito}
                    label="Distrito*"
                    required
                    onChange={handleChangeDistrict}
                  >
                    {distritos.map((distrito, i) => (
                      <MenuItem
                        key={i}
                        value={distrito}
                        data-test-id={distrito}
                      >
                        {distrito}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  style={{ width: "100%" }}
                  required
                  id="address"
                  label="Dirección"
                  {...register("address")}
                  data-test-id="register-address"
                />
              </Box>
              <Button
                variant="contained"
                className="botonRegister"
                type="submit"
                data-test-id="register-success"
              >
                Registrarse
              </Button>
            </FormControl>
          </form>
        </div>
        <div className="layoutForm__footer">
          <div className="layoutForm__footer-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" style={{ marginLeft: "10px", color: "#0030DA" }}>
              {" "}
              Inicia Sesión
            </Link>
          </div>
          <div className="layoutForm__footer-logo">
            <img className="logo" src={imagenes.img1} width="200" alt="" />
          </div>
        </div>
      </LayoutForm>
      <Notifications
        alertOnUser={alertOnUser}
        alertOnWalker={alertOnWalker}
        message="Este correo ya existe."
      />
    </LayoutInicial>
  );
};
