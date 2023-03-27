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

const Services = () => {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState();
  const [expand, setExpand] = useState(false);
  const [imageState, setImageState] = useState(true);
  const openDrawer = (o, s) => {
    setOpen(o);
    setService(s);
    console.log(`open:${o} service:${s.title}`);
  };
  const handleClose = () => {
    //setOpen(false);
    setTimeout(() => {
      window.location.href = "#contacto";
    }, 300);
  };
  const expandDescription = () => {
    setExpand(!expand);
    setImageState(!imageState);
  };
  return (
    <Container sx={{ py: 5, backgroundColor: "" }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#000032",
          mb: 3,
          fontWeight: "bold",
        }}
      >
        Servicios
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#f99f00",
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Impulsamos la conciencia ambiental y la cultura de seguridad y salud en
        el trabajo
      </Typography>
      <Box sx={{}}>
        <Swiper
          sx={{ width: { xs: "50%", md: "50%" } }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index} className="card-container" sx={{width:{xs:"50%", md:"80%"}}}>
              <Card elevation={7} sx={{ height: 450}}>
                <Box className="box1">
                  {imageState && (
                    <CardMedia sx={{ height: 190 }}>
                      <img
                        src={item.image}
                        alt={`logo ${item.image}`}
                        style={{
                          objectFit: "fill",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </CardMedia>
                  )}

                  <CardContent sx={{ height: 90, overflow: "hidden" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "justify" }}
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container>
                      <Grid item xs={12}>
                        <Button
                          sx={{ width: "100%", fontWeight: "bold", my: 2 }}
                          onClick={expandDescription}
                        >
                         Ver más
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Box>
                <Box className="box2">
                  <CardContent
                    sx={{ height: 300, overflow: "hidden"}}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "justify" }}
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{pb:4}}>
                    <Button
                      component="a"
                      variant="contained"
                      sx={{ width: "100%", backgroundColor: "#000032"}}
                      onClick={handleClose}
                    >
                      Contáctanos
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* <Grid container gap={1} justifyContent="space-around">
        {servicess.map((item) => (
          <Grid item xs={12} md={5} key={item.title}>
            <Card elevation={5} sx={{ height: 350, p: 2 }}>
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "justify", mb: 2, color: "#f99f00" }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ textAlign: "justify" }} gutterBottom>
                  {item.about}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ mt: "auto", fontWeight: "bold" }}
                  onClick={() => openDrawer(true, item)}
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      {/* <Dialog fullWidth={true} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Typography
            variant="h4"
            sx={{ color: "#f99f00", textAlign: "center" }}
          >
            {service.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography sx={{ textAlign: "justify", color: "black" }}>
              {service.about}
            </Typography>
            <Box>
              <List>
                {service.items.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <SendIcon sx={{ color: "#000032" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} sx={{ color: "black" }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            component="a"
            variant="contained"
            sx={{ width: "100%", backgroundColor: "#000032" }}
            onClick={handleClose}
          >
            Contactanos
          </Button>
        </DialogActions>
      </Dialog> */}
    </Container>
  );
};
export default Services;
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
