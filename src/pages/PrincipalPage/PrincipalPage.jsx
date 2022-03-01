import * as React from "react";

import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../images/imagenes.jsx";
import "./_PrincipalPage.scss";
import WalkerCard from "../../components/WalkerCard/WalkerCard";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 200;

const Distritos = [
  "Todos los Distritos",
  "Miraflores",
  "Breña",
  "San Isidro",
  "Barranco",
  "La Molina",
  "Callao",
  "Cercado de Lima",
  "San Martin de Porres",
  "San Miguel",
];

const Paseadores = [
  {
    photo: imagenes.img3,
    price: 16,
    name: "Helen Arias",
    ratingValue: 4.9,
    text: "Los perros tambien son el mejor amigo de las mujeres.",
    calification: "15 calificaciones | 19 paseos realizados",
    distrito: ["Miraflores", "Breña", "San Martin de Porres"],
  },
  {
    photo: imagenes.img4,
    price: 15,
    name: "Alex Marino",
    ratingValue: 4.8,
    text: "Entrenador de perros profesional.",
    calification: "7 calificaciones | 13 paseos realizados",
    distrito: ["Breña", "San Isidro", "San Miguel"],
  },
  {
    photo: imagenes.img5,
    price: 18,
    name: "Javier Sandoval",
    ratingValue: 5.0,
    text: "El más confiable para tu amigo canino!",
    calification: "21 calificaciones | 24 paseos realizados",
    distrito: ["San Isidro", "Barranco"],
  },
  {
    photo: imagenes.img6,
    price: 20,
    name: "Susan Avila",
    ratingValue: 5.0,
    text: "Tu perruno y yo nos vamos a llevar muy bien!",
    calification: "15 calificaciones | 19 paseos realizados",
    distrito: ["Barranco", "La Molina", "Miraflores"],
  },
  {
    photo: imagenes.img7,
    price: 18,
    name: "Nestor Magariño",
    ratingValue: 4.9,
    text: "El mejor cuidador de perros!",
    calification: "7 calificaciones | 13 paseos realizados",
    distrito: ["La Molina", "Callao"],
  },
  {
    photo: imagenes.img8,
    price: 15,
    name: "Luna Agreda",
    ratingValue: 4.5,
    text: "Solo un alma buena simpatiza con el alma de un perro.",
    calification: "21 calificaciones | 24 paseos realizados",
    distrito: ["Callao", "Cercado de Lima", "Miraflores"],
  },
];

const PrincipalPage = (props) => {
  const [distritoSelected, setDistritoSelected] = useState(() => {
    return "Todos los Distritos";
  });

  const [paseadoresD, setPaseadoresD] = useState(() => {
    return Paseadores.map((key) => {
      return (
        <WalkerCard
          photo={key.photo}
          price={key.price}
          name={key.name}
          ratingValue={key.ratingValue}
          text={key.text}
          calification={key.calification}
        />
      );
    });
  });

  function changePaseadores(distrito) {
    let paseadoresPintar = [];

    Paseadores.map((key) => {
      for (let i = 0; i < key.distrito.length; i++) {
        if (key.distrito[i] === distrito) paseadoresPintar.push(key);
      }
      return paseadoresPintar;
    });

    return setPaseadoresD(
      distrito !== "Todos los Distritos"
        ? paseadoresPintar.map((key) => {
            return (
              <WalkerCard
                photo={key.photo}
                price={key.price}
                name={key.name}
                ratingValue={key.ratingValue}
                text={key.text}
                calification={key.calification}
              />
            );
          })
        : Paseadores.map((key) => {
            return (
              <WalkerCard
                photo={key.photo}
                price={key.price}
                name={key.name}
                ratingValue={key.ratingValue}
                text={key.text}
                calification={key.calification}
              />
            );
          })
    );
  }

  ////////////////////////

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <h4
        style={{
          textAlign: "center",
          fontFamily: "Roboto-Bold",
          margin: "0.5rem 0rem",
        }}
      >
        Seleccione su distrito
      </h4>
      <Box sx={{ overflow: "auto" }} className="buttonBox">
        <List>
          {Distritos.map((district) => {
            return (
              <ListItem
                button
                onClick={() => {
                  setDistritoSelected(district);
                  changePaseadores(district);
                }}
                className="btn"
                key={district}
                style={{ backgroundColor: "rgba(144, 215, 202, 0.15)" }}
              >
                <ListItemText primary={district} />
              </ListItem>
            );
          })}
        </List>
        <img
          src={imagenes.img19}
          className="pataCirculoPP"
          alt=""
          width="150"
        ></img>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          className="appBar"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{ backgroundColor: "white" }}
        >
          <NavBar />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div className="titleWalkers">
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <p className="titleWalkers__message">
              Encuentra tu paseador ideal en {distritoSelected}
            </p>
          </div>

          <div className="card_container">{paseadoresD}</div>
        </Box>
      </Box>
    </>
  );
};

export default PrincipalPage;
