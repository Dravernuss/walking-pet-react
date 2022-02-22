import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import NavBar from "../../components/navBar/NavBar";
import imagenes from "../../images/imagenes.jsx";
import "./_PrincipalPage.scss";
import WalkerCard from "../../components/WalkerCard/WalkerCard";
import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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

const PrincipalPage = () => {
  const [, setDistritoSelected] = useState(() => {
    return;
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="appBar"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "white" }}
      >
        <NavBar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </NavBar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }} className="buttonBox">
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            className="buttonGroup"
          >
            {Distritos.map((key) => {
              return (
                // <ListItem>
                <Button
                  onClick={() => {
                    setDistritoSelected(key);
                    changePaseadores(key);
                  }}
                  className="btn"
                >
                  {key}
                </Button>
                // </ListItem>
              );
            })}
          </ButtonGroup>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="card_container">{paseadoresD}</div>
      </Box>
    </Box>
  );
};

export default PrincipalPage;
