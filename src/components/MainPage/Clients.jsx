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
      title: "Cantera San Miguel",
      src: "images/redSalud.jpeg",
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
  ];
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#fff",
          mb: 4,
          fontWeight: "bold",
        }}
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
      >
        Nuestra experiencia transforma la gestión de las empresas
      </Typography>
      .
      <Grid container gap={1.5} justifyContent="space-around">
        {companies.map((item) => (
          <Grid item xs={3} md={1} sx={{display:"flex", alignItems: "center"}}>
            <Card elevation={5} sx={{ width: {xs:90, md:125} }}>
              <Typography
                sx={{
                  backgorund: "#f99f00",
                  display: "flex",
                  justifyContent: "center",
                  py: 0.5,
                }}
              >
                <img src={item.src} alt="" width="90%" style={{}} />
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
