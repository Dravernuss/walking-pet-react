import "./_AdminLogin.scss";
import { Link } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import imagenes from "../../images/imagenes.jsx";
import { Box, Button, TextField } from "@mui/material";

const AdminLogin = () => {
  return (
    <div className="fondo">
      <LayoutForm title="Iniciar sesión">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <p style={{ fontFamily: "Roboto-Bold" }}>Soy administrador</p>
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
              width: "35%",
              padding: "10px 0",
              margin: "30px auto 0",
              borderRadius: "15px",
              fontSize: "19px",
              fontFamily: "Roboto-bold",
            }}
            href="/reservedtours"
          >
            Ingresar
          </Button>
        </FormControl>
        <div
          className="layoutForm__footer"
          style={{
            borderTop: "1px solid grey",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="layoutForm__footer-options">
            <div
              style={{
                marginTop: "20px",
                width: "100%",
                gap: "2px",
                fontFamily: "Roboto-Bold",
              }}
            >
              Ir a la pagina principal
              <Link to="/"> WALKINGPET</Link>
            </div>
            <img style={{ marginTop: "20px" }} src={imagenes.img1} alt=" " />
          </div>
          <div className="layoutForm__footer-logo"></div>
        </div>
      </LayoutForm>
    </div>
  );
};

export default AdminLogin;
