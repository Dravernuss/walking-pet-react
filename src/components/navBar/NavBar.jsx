import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import imagenes from "../../images/imagenes.jsx";
import "./_NavBar.scss";
import { Divider } from "@mui/material";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <Button variant="text" href="/principalpage">
        <img src={imagenes.img1} alt=" " width="200"></img>
      </Button>
      <div className="userInfo">
        <p>Manuel Baella</p>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar />
          <img src={imagenes.img2} alt=" "></img>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Button href="/clientprofile">
              <p
                style={{
                  color: "black",
                  fontFamily: "Roboto-Regular",
                }}
              >
                Ver Perfil
              </p>
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button href="/">
              <p style={{ color: "black", fontFamily: "Roboto-Regular" }}>
                Cerrar Sesión
              </p>
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
