import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <Container sx={{ pb: 1, pt:4 }}>
      <Grid container sx={{ pb: 4, alignItems: "center" }}>
        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h3"
              sx={{ mb: 5, textAlign: "justify", fontWeight: "bold" }}
              component={motion.div}
              initial={{ translateX: 90, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{translateX:0}}
            >
              Asesorías y Consultorías en Seguridad y Salud en el Trabajo y Medio Ambiente
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center" }}
              component={motion.div}
              initial={{ translateX: -90, opacity: 0 }}
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
              alt="Logo Ingeniero Asesor SST"
              width={"300px"}
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
