import React, { useState, useEffect } from "react";
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
import "./_Register.scss";

export const Register = () => {
  // const [linkRedirect, setLinkRedirect] = useState('./register');
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [distrito, setDistrito] = useState("");
  const [address, setAddress] = useState("");
  const [buttonRegister, setButtonRegister] = useState("Registrarse");

  const handleChangeInput = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleChangeSelect = (event) => {
    setDistrito(event.target.value);
  };
  const handleChangeRadio = (event) => {
    console.log("changeRadio");
    setType(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //guardar los estados en react redux
    // Se hizo por mientras con el local storage
    e.preventDefault();
    if (type === "paseador") {
      console.log("useeffect paseador");
      navigate("/registerWalker");
    } else if (type === "cliente") {
      console.log("useeffect cliente");
      navigate("/registerSuccess");
    }
  };

  // useEffect(() => {
  //   if (type === "paseador") {
  //     console.log("useeffect paseador");
  //     setButtonRegister(
  //       <Link to={"/registerWalker"} style={{ textDecoration: "none" }}>
  //         Registrarse
  //       </Link>
  //     );
  //   } else if (type === "cliente") {
  //     console.log("useeffect cliente");
  //     setButtonRegister(
  //       <Link to={"/registerSuccess"} style={{ textDecoration: "none" }}>
  //         Registrarse
  //       </Link>
  //     );
  //   }
  // }, [type]);

  return (
    <LayoutInicial>
      <LayoutForm title="Registro">
        <div className="layoutForm__scroll">
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
                value={name}
                onChange={handleChangeInput}
              />
              <TextField
                required
                className="apellidoTextfield"
                id="lastName"
                label="Apellido"
                value={lastName}
                onChange={handleChangeInput}
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="email"
                label="Correo electrónico"
                value={email}
                onChange={handleChangeInput}
              />
              <TextField
                style={{ width: "100%" }}
                required
                id="password"
                type="password"
                label="Contraseña"
                value={password}
                onChange={handleChangeInput}
              />
              <TextField
                style={{ width: "100%" }}
                required
                type="password"
                id="confirmPassword"
                label="Confirmar contraseña"
              />
              <TextField
                style={{ width: "100%" }}
                required
                type="number"
                id="phone"
                label="Teléfono Fijo/Móvil"
                value={phone}
                onChange={handleChangeInput}
              />
              <FormControl style={{ width: "100%", margin: "10px" }}>
                <InputLabel id="distrito-label">Distrito*</InputLabel>
                <Select
                  labelId="distrito-label"
                  id="distrito"
                  value={distrito}
                  onChange={handleChangeSelect}
                  label="Distrito*"
                  required
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
                value={address}
                onChange={handleChangeInput}
              />
            </Box>
            <Button
              variant="contained"
              className="botonRegister"
              onClick={handleSubmit}
            >
              {buttonRegister}
            </Button>
          </FormControl>
        </div>
        <div className="layoutForm__footer">
          <div className="layoutForm__footer-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" style={{ marginLeft: "10px", color: "#0030DA" }}>
              {" "}
              Inicia Sesión
            </Link>
          </div>
          <div className="layoutForm__footer-logo" />
        </div>
      </LayoutForm>
    </LayoutInicial>
  );
};
