import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container sx={{ pb: 2 }}>
      <Grid container sx={{ pb: 4, alignItems: "center" }}>
        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h3"
              sx={{ mb: 5, textAlign: "justify", fontWeight: "bold" }}
              component={motion.div}
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Asesorías y Consultorías en Seguridad y Salud en el Trabajo y
              Medio Ambiente
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
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              component={motion.div}
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Button
                href="#servicios"
                variant="outlined"
                sx={{
                  color: "#f99f00",
                  fontSize: { xs: "20px", md: "25px" },
                  borderColor: "#f99f00",
                  border: 2,
                  borderRadius: 50,
                  "&:hover": {
                    backgroundColor: "#f99f00",
                    color: "#000032",
                    borderColor: "#f99f00",
                    border: 2,
                  },
                }}
              >
                Conoce nuestros servicios
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              backgroundColor: "#000032",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.img
              src="images/logo-sst-colores-copia-min.png"
              alt="logo-ingeniero-asesor-SST"
              width={300}
              style={{ my: "auto" }}
              whileInView={{ scale: [1, 1.05, 1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
