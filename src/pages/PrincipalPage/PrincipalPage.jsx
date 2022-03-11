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
import { distritos } from "../../utils/constants";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllWalkersAsync } from "../../slices/walkerSlice";

const drawerWidth = 200;

const PrincipalPage = (props) => {
  const dispatch = useDispatch();
  const walkers = useSelector((state) => state.walker.walkers);
  useEffect(async () => {
    const walkers_await = await dispatch(getAllWalkersAsync());
    setPaseadoresD(walkers_await.payload);
  }, []);

  const [distritoSelected, setDistritoSelected] = useState(
    "Todos los distritos"
  );

  const [paseadoresD, setPaseadoresD] = useState(walkers);

  function changePaseadores(selectedDistrict) {
    let paseadoresPintar = [];

    walkers?.map((key) => {
      for (let i = 0; i < key.avalaible_districts.length; i++) {
        if (key.avalaible_districts[i] === selectedDistrict)
          paseadoresPintar.push(key);
      }
      return paseadoresPintar;
    });

    return setPaseadoresD(
      selectedDistrict !== "Todos los distritos" ? paseadoresPintar : walkers
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
          <ListItem
            button
            onClick={() => {
              setDistritoSelected("Todos los distritos");
              changePaseadores("Todos los distritos");
            }}
            className="btn"
            key="Todos los distritos"
            style={{ backgroundColor: "rgba(144, 215, 202, 0.15)" }}
          >
            <ListItemText primary={"Todos los distritos"} />
          </ListItem>
          {distritos.map((district) => {
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

          <div className="card_container">
            {paseadoresD?.map((key, i) => {
              return (
                <WalkerCard
                  key={i}
                  photo_url={key.photo_url}
                  price={key.price}
                  firstname={key.firstname}
                  lastname={key.lastname}
                  rating={key.rating}
                  greeting={key.greeting}
                  total_rating={key.total_rating}
                  total_walking={key.total_walking}
                  _id={key._id}
                />
              );
            })}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default PrincipalPage;
