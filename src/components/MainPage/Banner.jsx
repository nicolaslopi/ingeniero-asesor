import { Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container>
      <Grid container sx={{ pt: 2, pb:4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ color: "white" }}>
            <Typography variant="h3" sx={{ mb: 2, textAlign:"justify", fontWeight: "bold" }}>
              Asesorías y Consultorías en Seguridad y Salud en el Trabajo - Ambiental
            </Typography>
            <Typography variant="h5" sx={{ my: 3, textAlign:"justify"  }}>
              Ponemos a su disposición nuestra experiencia en asesoría y
              consultoría ambiental, seguridad y salud en el trabajo, para el
              cumplimiento de los requisitos legales y el diseño e
              implementación de sistemas integrados de gestión, impulsando a las
              empresas al logro de sus objetivos y metas demostrando conciencia
              ambiental y cultura de seguridad y salud en el trabajo
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button href="#services" variant="outlined" sx={{ color: "#f99f00", fontSize: "20px", borderColor:"#f99f00", "&:hover":{ backgroundColor:'#f99f00', color:"#000032",borderColor:"#f99f00"}}}>
                Conoce nuestros servicios
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="images/logo-sst-colores-copia.png"
              alt=""
              width={300}
              st
              yle={{ my: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
