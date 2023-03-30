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
} from "@mui/material";
import {motion} from 'framer-motion';

const Clients = () => {
  const companies = [
    {
      title: "Avicola",
      src: "images/avicola.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/canteraSanMiguel.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/ferreteria.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/inmsas.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/provi.jpeg",
    },
    {
      title: "Yumbogas SAS",
      src: "images/yumbogas-sas.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/refriSur.jpeg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/S.jpeg",
    },
    {
      title: "Facmac",
      src: "images/facmac.jpg",
    },
    {
      title: "Cantera San Miguel",
      src: "images/redSalud.jpeg",
    },
    {
      title: "Distribuidora GTO",
      src: "images/distribuidora-gto.jpeg",
    },
    {
      title: "Universal de aires",
      src: "images/universal-de-aires.jpeg",
    },
    {
      title: "Naranjo SAS",
      src: "images/Naranjo-sas.jpeg",
    },
  ];
  return (
    <Container sx={{ pt: 8 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#fff",
          mb: 4,
          fontWeight: "bold",
        }}
        component={motion.div}
        initial={{translateX:-100, opacity:0}}
        whileInView={{translateX:0, opacity:1}}
        transition={{duration:1}}
      >
        Clientes
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#f99f00",
          mb: 4,
          fontWeight: "bold",
        }}
        component={motion.div}
        initial={{translateX:100, opacity:0}}
        whileInView={{translateX:0, opacity:1}}
        transition={{duration:1}}
      >
        Nuestra experiencia transforma la gestión de las empresas
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#fff",
          width: "40%",
          height: 3,
          mx: "auto",
          my: 6,
        }}
        component={motion.div}
        initial={{translateY:100, opacity:0}}
        whileInView={{translateY:0, opacity:1}}
        transition={{duration:1}}
      />
      <Grid container gap={6} justifyContent="space-around">
        {companies.map((item,index) => (
          <Grid item xs={3} md={1} sx={{display:"flex", alignItems: "center"}} component={motion.div} initial={{scale:0, opacity:0}} whileInView={{opacity:1, scale:1, rotate:360, transition:{delay:index-(index*0.9),duration:1}}}>
            <Card elevation={5} sx={{ width: {xs:90, md:125} }}>
              <Typography
                sx={{
                  backgorund: "#f99f00",
                  display: "flex",
                  justifyContent: "center",
                  py: 0.5,
                }}
              >
                <img src={item.src} alt={item.title} width="100%" style={{objectFit:"fill"}} />
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
