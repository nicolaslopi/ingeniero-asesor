import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  Dialog,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
  CardMedia,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import { services } from "./servicesContans";

const AboutUs = () => {
  return (
    <Container sx={{ py: 5}}>
        <Card elevation={7} sx={{backgroundColor:"", p:4}}>
        <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#f99f00",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Nosotros
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#000032",
          mb: 2,
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        Somos un equipo de ingenieros especialistas en Seguridad y Salud en el
        Trabajo y Ambiente, con más de 8 años de experiencia, asesorando y
        brindando soluciones a empresas de diferentes sectores económicos.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#000032",
          mb: 6,
          fontWeight: "bold",
          textAlign: "justify",
        }}
      >
        Ponemos a su disposición nuestra experiencia en asesoría y consultoría
        ambiental, seguridad y salud en el trabajo, para el cumplimiento de los
        requisitos legales y el diseño e implementación de sistemas integrados
        de gestión, impulsando a las empresas al logro de sus objetivos y metas
        demostrando conciencia ambiental y cultura de seguridad y salud en el
        trabajo
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button href="#servicios" variant="contained" sx={{fontSize: "20px", backgroundColor:'#f99f00', color:"#000032",borderColor:"#f99f00", "&:hover":{backgroundColor:'#000032', color:"#f99f00",borderColor:"#f99f00"}}}>
                Conoce nuestros servicios
              </Button>
            </Box>
        </Card>
    </Container>
  );
};
export default AboutUs;
{
  /* <Container sx={{ p: 4 }}>
  <Typography
    variant="h4"
    sx={{ mb: 2, color: "#f99f00", textAlign: "center" }}
  >
    {service.title}
  </Typography>
  <Typography sx={{ textAlign: "justify" }}>{service.about}</Typography>
  <Box>
    <List>
      {service.items.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Box>
  <Box sx={{width:"90%", display:"flex", justifyContent:"center", alignSelf:"end", position:"fixed"}}>
    <Button variant="contained" sx={{width:"100%", backgroundColor:"#000032"}}>Contactanos</Button>
  </Box>
  </Container> */
}
