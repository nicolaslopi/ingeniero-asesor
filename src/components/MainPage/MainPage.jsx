import { Button, ButtonGroup, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "./Banner";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import WhatsApp from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ReactWhatsapp from "react-whatsapp";

const MainPage = () => {
  return (
    <Box sx={{ backgroundColor: "", overflow: "hidden" }}>
      <Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="#"
          sx={{
            backgroundColor: "#000032",
            height: { xs: "auto", md: "85vh" },
          }}
        >
          <Banner />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="nosotros"
          sx={{
            backgroundColor: "#f99f00",
            height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
          }}
        >
          <AboutUs />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="servicios"
          sx={{
            backgroundColor: "#fff",
            height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
          }}
        >
          <Services />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="clientes"
          sx={{
            backgroundColor: "#000032",
            height: { xs: "auto", md: "100vh" },
          }}
        >
          <Clients />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="contacto"
          sx={{ backgroundColor: "#fff", height: { xs: "auto", md: "100vh" } }}
        >
          <Contact />
        </Grid>
      </Grid>
      <Box sx={{ position: "fixed", bottom: 20, right: 3 }}>
        <ButtonGroup orientation="vertical">
          <IconButton size="medium" sx={{ color: "white", bgcolor: "green", mb:1 }} component={ReactWhatsapp} number="57-312-237-7845" message="Por favor deje su mensaje. En un momento será atendido.">
            <WhatsApp sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton size="medium" sx={{ color: "white", bgcolor: "#0063cc"}} href="tel:+573122377845" target={"_blank"}>
            <PhoneAndroidIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default MainPage;
