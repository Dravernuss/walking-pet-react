import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import imagenes from "../../images/imagenes.jsx";
import "./_NavBar.scss";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOneUserAsync, toUser } from "../../slices/userSlice.js";
import { getOneWalkerAsync, toWalker } from "../../slices/walkerSlice.js";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //--------USER---------------------------------------
  const user = useSelector(toUser);
  // const ID = JSON.parse(localStorage.getItem("infoUser"))._id;
  const ID = JSON.parse(localStorage.getItem("infoUser"))._id;
  const ROLE = JSON.parse(localStorage.getItem("infoUser")).role;

  const endSession = async () => {
    await localStorage.removeItem("infoUser");
    // await localStorage.removeItem("infoWalker");
    window.location = "/";
  };

  //-------WALKER--------------------------------------
  const walker = useSelector(toWalker);
  // const walkerID = JSON.parse(localStorage.getItem("infoWalker"))._id;
  useEffect(() => {
    if (ROLE === "user" && !user) dispatch(getOneUserAsync(ID));
    if (ROLE === "walker" && !walker) dispatch(getOneWalkerAsync(ID));
  }, []);

  return (
    <div className="navbar">
      <Button variant="text" onClick={() => navigate("/principalpage")}>
        <img src={imagenes.img1} alt=" " width="200"></img>
      </Button>
      <div className="userInfo">
        <p>
          {ROLE === "user"
            ? user?.firstname + " " + user?.lastname
            : walker?.firstname + " " + walker?.lastname}
        </p>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src={`${user ? user.photo_url : walker?.photo_url}`} />
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
                if (user) {
                  navigate("/clientprofile");
                } else navigate("/walkerprofile");
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
          {ROLE === "user" ? (
            <div>
              <MenuItem
                style={{ width: "100%", padding: "0" }}
                onClick={handleClose}
              >
                <Button
                  onClick={() => navigate("/principalpage")}
                  style={{
                    color: "black",
                    fontFamily: "Roboto-Regular",
                    width: "100%",
                    padding: "10px 15px",
                  }}
                >
                  Buscar Paseador
                </Button>
              </MenuItem>
              <Divider />
              <MenuItem
                style={{ width: "100%", padding: "0" }}
                onClick={handleClose}
              >
                <Button
                  onClick={() => navigate("/datesclient")}
                  style={{
                    color: "black",
                    fontFamily: "Roboto-Regular",
                    width: "100%",
                    padding: "10px 15px",
                  }}
                >
                  Ver Mis Citas
                </Button>
              </MenuItem>
              <Divider />
            </div>
          ) : (
            <div>
              <MenuItem
                style={{ width: "100%", padding: "0" }}
                onClick={handleClose}
              >
                <Button
                  onClick={() => navigate("/dateswalker")}
                  style={{
                    color: "black",
                    fontFamily: "Roboto-Regular",
                    width: "100%",
                    padding: "10px 15px",
                  }}
                >
                  Ver Mis Citas
                </Button>
              </MenuItem>
              <Divider />
            </div>
          )}
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
