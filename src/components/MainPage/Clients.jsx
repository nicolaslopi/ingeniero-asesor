import {
  Card,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import {motion} from 'framer-motion';

const Clients = () => {
  const companies = [
    {
      title: "Avicola SST",
      src: "images/avicola.jpeg",
    },
    {
      title: "Cantera San Miguel SST",
      src: "images/canteraSanMiguel.jpeg",
    },
    {
      title: "Ferreteria SST",
      src: "images/ferreteria.jpeg",
    },
    {
      title: "inmsas SST",
      src: "images/inmsas.jpeg",
    },
    {
      title: "Provi SST",
      src: "images/provi.jpeg",
    },
    {
      title: "Yumbogas SAS SST",
      src: "images/yumbogas-sas.jpeg",
    },
    {
      title: "RefriSur SST",
      src: "images/refriSur.jpeg",
    },
    {
      title: "S SST",
      src: "images/S.jpeg",
    },
    {
      title: "Facmac SST",
      src: "images/facmac.jpg",
    },
    {
      title: "Redsalud SST",
      src: "images/redSalud.jpeg",
    },
    {
      title: "Distribuidora GTO SST",
      src: "images/distribuidora-gto.jpeg",
    },
    {
      title: "Universal de aires SST",
      src: "images/universal-de-aires.jpeg",
    },
    {
      title: "Naranjo SAS SST",
      src: "images/Naranjo-sas.jpeg",
    },
  ];
  return (
    <Container sx={{ pt: 8, pb:{xs:2, md:0} }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#fff",
          mb: 4,
          fontWeight: "bold",
        }}
        component={motion.div}
        initial={{translateX:-90, opacity:0}}
        whileInView={{translateX:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
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
        initial={{translateX:90, opacity:0}}
        whileInView={{translateX:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
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
        initial={{translateY:90, opacity:0}}
        whileInView={{translateY:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
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
                <img src={item.src} alt={`Logo ${item.title}`} width="100%" style={{objectFit:"fill"}} />
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
