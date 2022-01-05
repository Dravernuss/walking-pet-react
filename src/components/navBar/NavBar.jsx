import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import imagenes from '../images/imagenes.jsx'
import './_NavBar.scss';

const  NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className='navbar'>
          <Button variant="text" href="/PrincipalPage">
          <img src={imagenes.img1} alt=" " width="200"></img>
          </Button>
          <div className='userInfo'>
          <p>Manuel Baella</p> 
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
            <Avatar />
           <img src={imagenes.img3} alt=" "></img>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Ver Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
        </Menu>
        </div>
      </div>
    );
  }

export default NavBar;