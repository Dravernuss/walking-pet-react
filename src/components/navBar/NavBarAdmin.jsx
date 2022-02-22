import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import imagenes from "../../images/imagenes.jsx";
import "./_NavBar.scss";

const NavBarAdmin = () => {
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
      <Button variant="text" href="">
        <img src={imagenes.img1} alt=" " width="200"></img>
      </Button>
      <div className="userInfo">
        <p>Admin</p>
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
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Button href="/reservedtours">
              <p
                style={{
                  color: "black",
                  fontFamily: "Roboto-Regular",
                }}
              >
                Paseos Reservados
              </p>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button href="/walkerregistration">
              <p style={{ color: "black", fontFamily: "Roboto-Regular" }}>
                Registro de Paseadores
              </p>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button href="/reports">
              <p style={{ color: "black", fontFamily: "Roboto-Regular" }}>
                Reportes y Quejas
              </p>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button href="/admin">
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

export default NavBarAdmin;
