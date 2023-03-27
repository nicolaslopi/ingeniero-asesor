import { Box, Button, Container, Grid, IconButton, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container>
      <Grid container sx={{ pb:4, alignItems:"center"}}>
        <Grid item xs={12} md={6} sx={{mb:2}}>
          <Box sx={{ color: "white" }}>
            <Typography variant="h3" sx={{ mb: 5, textAlign:"justify", fontWeight: "bold" }}>
              Asesorías y Consultorías en Seguridad y Salud en el Trabajo y Medio Ambiente
            </Typography>
            {/* <Typography variant="h5" sx={{ my: 3, textAlign:"justify"  }}>
              Ponemos a su disposición nuestra experiencia en asesoría y
              consultoría ambiental, seguridad y salud en el trabajo, para el
              cumplimiento de los requisitos legales y el diseño e
              implementación de sistemas integrados de gestión, impulsando a las
              empresas al logro de sus objetivos y metas demostrando conciencia
              ambiental y cultura de seguridad y salud en el trabajo.
              <br></br>
              Somos un equipo de ingenieros especialistas en Seguridad y Salud en el Trabajo y Ambiente, con más
              de 8 años de experiencia, asesorando y brindando soluciones a empresas de diferentes sectores económicos.
            </Typography> */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button href="#servicios" variant="outlined" sx={{ color: "#f99f00", fontSize: {xs: "20px", md:"25px"}, borderColor:"#f99f00", "&:hover":{ backgroundColor:'#f99f00', color:"#000032",borderColor:"#f99f00"}}}>
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
