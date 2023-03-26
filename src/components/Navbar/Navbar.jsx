import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Container,
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
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const navLinks = [
  { title: "Inicio", path: "#" },
  { title: "Servicios", path: "#services" },
  { title: "Clientes", path: "#clients" },
  { title: "Contacto", path: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navbarState, setNavbarState] = useState(true);
  const handleChangeNavbar = (value) => {
    setNavbarState(value);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#000032" }}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <Typography component="a" href="/" sx={{mt:1, mr:1}}>
                <img
                  width={51}
                  height={55}
                  src="images/logo-sst-colores-copia.png"
                  alt="logo-sst-colores"
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
                Ingeniero Asesor
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
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 600,
                      "&:hover": {
                        fontSize: "1.2rem",
                        color: "white",
                      },
                    }}
                    href={link.path}
                  >
                    {link.title}
                  </Button>
                ))}
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
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <NavListDrawerResponsive
          onClick={() => setOpen(false)}
          navLinks={navLinks}
        />
      </Drawer>
    </>
  );
}
