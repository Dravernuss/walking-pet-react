import "./_AdminLogin.scss";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LayoutForm from "../../components/LayoutForm/LayoutForm";
import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import imagenes from "../../images/imagenes.jsx";
import { Box, Button, TextField } from "@mui/material";
import { login } from "../../api/walker.api";
import { loginAdmin } from "../../api/admin.api";

const AdminLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const admin = {
      email: elements[0].value,
      password: elements[2].value,
    };
    if (admin) {
      try {
        const response = await loginAdmin(admin);
        const token = response.token;
        const decoded = jwt_decode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("AdminInfo", JSON.stringify(decoded));
        navigate("/reservedtours");
      } catch {
        alert("No puede entrar: Revise su contraseña y usuario");
      }
    } else {
      alert("verifique que haya llenado los campos");
    }
  };

  return (
    <div className="fondo">
      <LayoutForm title="Iniciar sesión">
        <form onSubmit={handleSubmit}>
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
              <TextField
                required
                id="password"
                type="password"
                label="Contraseña"
              />
            </Box>
            {/* <Button
              variant="contained"
              style={{
                backgroundColor: "#FFFF",
                color: "#000",
                width: "35%",
                padding: "10px 0",
                margin: "30px auto 0",
                borderRadius: "15px",
                fontSize: "15px",
                fontFamily: "Roboto-bold",
              }}
              href="/reservedtours"
            >
              Ingresar
            </Button> */}
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#FFFF",
                color: "#000",
                width: "35%",
                padding: "10px 0",
                margin: "30px auto 0",
                borderRadius: "15px",
                fontSize: "15px",
                fontFamily: "Roboto-bold",
              }}
            >
              Ingresar
            </Button>
          </FormControl>
        </form>
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
          <div className="layoutFormAdmin__footer-options">
            <div
              style={{
                width: "100%",
                gap: "2px",
                fontFamily: "Roboto-Bold",
                marginTop: "-5px",
              }}
            >
              Ir a la pagina principal
              <Link to="/"> WALKINGPET</Link>
            </div>
            <img style={{ marginTop: "20px" }} src={imagenes.img1} alt=" " />
          </div>
        </div>
      </LayoutForm>
    </div>
  );
};

export default AdminLogin;
