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

import { createUserAsync } from "../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { walkerToCreate1 } from "../../slices/walkerSlice";
import { create } from "@mui/material/styles/createTransitions";

export const Register = () => {
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
    console.log("changeRadio");
    setType(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmitTwo = async (data) => {
    console.log("daga", data);
    if (type === "paseador") {
      await dispatch(walkerToCreate1(data));
      navigate("/registerWalker");
    } else if (type === "cliente") {
      await dispatch(createUserAsync(data));
      navigate("/registerSuccess");
    }
  };
  useEffect(() => {
    token && navigate("/principalpage");
  }, []);

  //-----REDUX------CREATE USER-------------------------------
  const dispatch = useDispatch();
  // const selector = useSelector();

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
                />
                <TextField
                  required
                  className="apellidoTextfield"
                  id="lastName"
                  label="Apellido"
                  {...register("lastname")}
                />
                <TextField
                  style={{ width: "100%" }}
                  required
                  type="email"
                  id="email"
                  label="Correo electrónico"
                  {...register("email")}
                />
                <TextField
                  style={{ width: "100%" }}
                  // id="password"
                  type="password"
                  label="Contraseña"
                  // value={password}
                  {...register("password", {
                    required: "Password is required!",
                  })}
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
                />
                <FormControl style={{ width: "100%", margin: "10px" }}>
                  <InputLabel id="distrito-label">Distrito*</InputLabel>
                  <Select
                    labelId="distrito-label"
                    id="distrito"
                    value={distrito}
                    label="Distrito*"
                    required
                    onChange={handleChangeDistrict}
                  >
                    {distritos.map((distrito, i) => (
                      <MenuItem key={i} value={distrito}>
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
                />
              </Box>
              <Button
                variant="contained"
                className="botonRegister"
                type="submit"
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
    </LayoutInicial>
  );
};
