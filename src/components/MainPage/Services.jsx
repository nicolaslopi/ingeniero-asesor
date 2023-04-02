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
  Hidden,
} from "@mui/material";
import { motion } from "framer-motion";
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
import { padding } from "@mui/system";

const Services = () => {
  const [expand, setExpand] = useState([]);
  const [indexItem, setIndexItem] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageState, setImageState] = useState(true);
  const handleClose = () => {
    //setOpen(false);
    setTimeout(() => {
      window.location.href = "#contacto";
    }, 300);
  };
  const expandDescription = (index) => {
    const found = expand.findIndex((element) => element === false);
    console.log("Found es: " + found);
    console.log("Index es: " + index);
    if(indexItem === 0){
      expand[index] = !expand[index];
      if(index !== currentIndex) expand[currentIndex] = true;
      setExpand(expand);
      setIndexItem(1);
      console.log("Entré al 1er if");
    }
    else if (indexItem === 1) {
      expand[index] = !expand[index];
      setExpand(expand);
      expand.map((item, i) => {
        if(i !== index){
        expand[i] = true;
        setExpand(expand);
        }
      });
      console.log(expand)
      setIndexItem(0);
      console.log("Entré al 2do if");
    }
    setCurrentIndex(index)
    console.log("IndexItem es: " + indexItem);
    console.log("-----------------------------");
  };
  const closeDescription = (index) => {
    const found = expand.findIndex((element) => element === false);
    expand[index] = !expand[index];
    if (found !== index) {
      expand[found] = !expand[found];
    }
    setExpand(expand);
    console.log("Actualmente indexItem es:" + indexItem);
    console.log("Actualmente found es:" + indexItem);
  };

  useEffect(() => {
    services.map((item, index) => {
      expand[index] = true;
      setExpand(expand);
    });
  }, []);

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
        component={motion.div}
        initial={{ translateY: 90, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ translateX: 0 }}
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
        component={motion.div}
        initial={{ translateY: 90, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ translateX: 0 }}
      >
        Impulsamos la conciencia ambiental y la cultura de seguridad y salud en
        el trabajo
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#000032",
          width: "50%",
          height: 3,
          mx: "auto",
          my: 2,
        }}
        component={motion.div}
        initial={{ translateX: 90, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ translateX: 0 }}
      />
      <Box sx={{ py: 2, backgroundColor: "white" }}>
        <Swiper
          style={{
            backgroundColor: "white",
            paddingBottom: 3,
            paddingTop: 3,
            paddingLeft: 3,
            paddingRight: 3,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className=""
        >
          {services.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: { xs: "50%", md: "80%" },
                backgroundColor: "white",
              }}
            >
              <Card
                elevation={6}
                sx={{ height: { xs: "auto", md: 350 } }}
                component={motion.div}
                whileHover={{
                  boxShadow: "3px 3px 2px 1px #000032",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index - index * 0.9, duration: 0.5 },
                }}
              >
                {expand[index] && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    {imageState && (
                      <CardMedia sx={{ height: 210 }}>
                        <img
                          src={item.image}
                          alt={`${item.title}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </CardMedia>
                    )}
                    <Divider />
                    <CardContent
                      sx={{
                        height: 40,
                        mt: 1,
                        overflow: "hidden",
                        backgroundColor: "",
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ textAlign: "center" }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Grid container>
                        <Grid item xs={12}>
                          <Button
                            sx={{
                              width: "100%",
                              fontWeight: "bold",
                              mb: 6,
                              textAlign: "center",
                              color: "#000032",
                            }}
                            onClick={() => expandDescription(index)}
                          >
                            Ver más
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Box>
                )}
                {!expand[index] && (
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    <CardContent
                      sx={{ height: 210, overflow: "hidden", pt: 2, pb: 2 }}
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
                    <CardActions>
                      <Grid conatiner sx={{ width: "100%" }}>
                        <Grid
                          item
                          xs={12}
                          sx={{ width: "100%", textAlign: "center" }}
                        >
                          <Button
                            component="a"
                            variant="outlined"
                            sx={{
                              borderColor: "#000032",
                              border: 2,
                              color: "#000032",
                              fontWeight: "bold",
                              borderRadius: 50,
                              mx: "auto",
                              width: "90%",
                              "&:hover": {
                                backgroundColor: "#000032",
                                border: 2,
                                color: "#fff",
                              },
                            }}
                            onClick={handleClose}
                          >
                            Contáctanos
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            sx={{
                              width: "100%",
                              fontWeight: "bold",
                              mt: 2,
                              mb: 4,
                              textAlign: "center",
                              color: "#000032",
                            }}
                            onClick={() => expandDescription(index)}
                          >
                            Ver menos
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Box>
                )}
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
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

{
  /* <Grid container gap={1} justifyContent="space-around">
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
      </Grid> */
}
{
  /* <Dialog fullWidth={true} open={open} onClose={() => setOpen(false)}>
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
      </Dialog> */
}
