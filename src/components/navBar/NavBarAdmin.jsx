import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import imagenes from "../../images/imagenes.jsx";
import "./_NavBar.scss";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { textTransform } from "@mui/system";

const NavBarAdmin = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const reservedtours = () => {
    setAnchorEl(null);
    navigate("/reservedtours");
  };
  const walkerregistration = () => {
    setAnchorEl(null);
    navigate("/walkerregistration");
  };
  const reports = () => {
    setAnchorEl(null);
    navigate("/reports");
  };

  const endSession = async () => {
    await localStorage.removeItem("infoUser");
    window.location = "/admin";
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
          data-test-id="open-menu"
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
          data-test-id="list-menu"
        >
          <MenuItem onClick={reservedtours}>
            <p
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                textTransform: "uppercase",
              }}
            >
              Paseos Reservados
            </p>
          </MenuItem>
          <Divider />
          <MenuItem onClick={walkerregistration}>
            <p
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                textTransform: "uppercase",
              }}
            >
              Registro de Paseadores
            </p>
          </MenuItem>
          <Divider />
          <MenuItem onClick={reports}>
            <p
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                textTransform: "uppercase",
              }}
            >
              Reportes y Quejas
            </p>
          </MenuItem>
          <Divider />
          <MenuItem onClick={endSession}>
            <p
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                textTransform: "uppercase",
              }}
            >
              Cerrar Sesión
            </p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBarAdmin;
