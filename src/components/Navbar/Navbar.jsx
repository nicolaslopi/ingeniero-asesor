import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawerResponsive from "./NavbarDrawer";
import { Box } from "@mui/system";
import Facebook from "@mui/icons-material/Facebook";
import Instragram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { servicesNav,changePosition} from "../MainPage/servicesContans";
import { ServicesContext, data } from "../MainPage/ServicesContext";

const navLinks = [
  { title: "Inicio", path: "#" },
  { title: "Nosotros", path: "#nosotros" },
  { title: "Servicios", path: "#servicios" },
  { title: "Clientes", path: "#clientes" },
  { title: "Contacto", path: "#contacto" },
];

export default function Navbar() {

  const {services, setServices} = useContext(ServicesContext);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [navbarState, setNavbarState] = useState(true);
  const handleChangeNavbar = (value) => {
    setNavbarState(value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setServices([]);
    setServices(data);
    if(event.currentTarget.id === "navButton2") setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClickItem = () => {
    window.location.href = navLinks[2].path;
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectService = (index) => {
    [services[1], services[index]] = [services[index], services[1]];
    setServices(services);
    window.location.href = "#servicios"
    setAnchorEl(null);
  } 

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#000032" }}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography component="a" href="/" sx={{ mt: 1, mr: 1 }}>
                <img
                  width={51}
                  height={55}
                  src="images/logo-sst-colores-copia-min.png"
                  alt="Logo Ingeniero Asesor SST"
                  loading="lazy"
                />
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                component="a"
                href="/"
                sx={{ textDecoration: "none" }}
              >
                Ingeniero Asesor SST
              </Typography>
            </Box>
            {navbarState && (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                  },
                }}
              >
                {navLinks.map((item,index)=>(
               <Button
                  id={"navButton"+index}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 600,
                    "&:hover": {
                      fontSize: "1.5rem",
                      color: "white",
                    },
                  }}
                  href={item.path}
                >
                  {item.title}
                </Button>
                  ))}
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "navButton2",
                  }}
                >
                  {services.map((item,index) => (
                    <MenuItem onClick={()=>{selectService(index)}}>{item.title}</MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
            {/* <IconButton
              sx={{ color: "#efb603", "&:hover": { transform: "scale(1.2)" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: "#efb603",
                "&:hover": { transform: "scale(1.2)", color: "#efb603" },
              }}
              href="https://www.instagram.com/linaquesada/"
              target={"_blank"}
            >
              <Instragram />
            </IconButton>
            <IconButton
              sx={{ color: "#efb603", "&:hover": { transform: "scale(1.2)" } }}
            >
              <WhatsApp />
            </IconButton> */}
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ display: { xs: "block", lg: "none" }, height: "250px" }}
      >
        <NavListDrawerResponsive
          onClick={() => setOpenDrawer(false)}
          navLinks={navLinks}
        />
      </Drawer>
      {/* <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={()=> setOpen(false)}
        aria-haspopup="true"  
      >
        <MenuItem onClick={()=> setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={()=> setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={()=> setOpen(false)}>Logout</MenuItem>
      </Menu> */}
    </>
  );
}
