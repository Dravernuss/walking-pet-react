import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import imagenes from "../../images/imagenes.jsx";
import "./_NavBar.scss";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = JSON.parse(localStorage.getItem("infoUser"));

  const endSession = () => {
    localStorage.removeItem("infoUser");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Button variant="text" onClick={() => navigate("/principalpage")}>
        <img src={imagenes.img1} alt=" " width="200"></img>
      </Button>
      <div className="userInfo">
        <p>
          {user.firstname} {user.lastname}
        </p>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src={user.photo_url} />
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
          <MenuItem
            style={{ width: "100%", padding: "0" }}
            onClick={handleClose}
          >
            <Button
              onClick={() => {
                navigate("/clientprofile");
              }}
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                width: "100%",
                padding: "10px 15px",
              }}
            >
              Ver Perfil
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem
            style={{ width: "100%", padding: "0" }}
            onClick={handleClose}
          >
            <Button
              onClick={endSession}
              style={{
                color: "black",
                fontFamily: "Roboto-Regular",
                width: "100%",
                padding: "10px 15px",
              }}
            >
              Cerrar Sesión
            </Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
