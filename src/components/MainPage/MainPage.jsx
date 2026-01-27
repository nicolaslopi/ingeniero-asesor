import { Button, ButtonGroup, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "./Banner";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import News from "./News";
import WhatsApp from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ReactWhatsapp from "react-whatsapp";
import { services } from "./servicesContans";
import { ServicesProvider } from "./ServicesContext";
import DigitalProducts from "./DigitalProducts";
import FreeResources from "./FreeResources";
import Quotes from "./Quotes";

const MainPage = () => {
  const wMessage = "Hola, estoy interesado en una asesoría SST para mi empresa, podrían darme más información"

  // const handleWhatsappConversion = () => {
  //   if (window.gtag) {
  //     window.gtag('event', 'conversion', {
  //       'send_to': 'AW-11168568075/6cgwCJi9554YEIumy80p'
  //     });
  //   }
  // }  
  function gtag_report_conversion(url) {
    // 1. Avisar a Google Tag Manager para GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'click_whatsapp_manual' // Este nombre coincide con tu activador en GTM
    });
  
    // 2. Código original de Google Ads (AW)
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.open(url, '_blank');
      }
    };
    
    window.gtag('event', 'conversion', {
        'send_to': 'AW-11168568075/6cgwCJi9554YEIumy80p',
        'event_callback': callback
    });
    
    return false;
  }


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
          <ServicesProvider>
            <Services/>
          </ServicesProvider>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="cotizaciones"
          sx={{
            backgroundColor: "#d2d2d2",
            minHeight: { xs: "auto", md: "529px" },
            pb:10
          }}
        >
          <Quotes/>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="tienda-virtual"
          sx={{
            backgroundColor: "#000032",
            height: { xs: "auto", md: "auto" },
            pb:10
          }}
        >
          <DigitalProducts/>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="recursos"
          sx={{
            backgroundColor: "#f99f00",
            minHeight: { xs: "auto", md: "529px" },
            pb:10
          }}
        >
          <FreeResources/>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          id="noticias"
          sx={{
            backgroundColor: "#fff",
            height: { xs: "auto", md: "100vh" },
          }}
        >
          <News/>
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
          <IconButton 
            size="medium" sx={{ color: "white", bgcolor: "green", mb:1, "&:hover":{color: "white", bgcolor: "green"} }}
            onClick={() => gtag_report_conversion(`https://wa.me/573106409960?text=${encodeURIComponent(wMessage)}`)}
          >
            <WhatsApp sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton size="medium" sx={{ color: "white", bgcolor: "#0063cc", "&:hover":{color: "white", bgcolor: "#0063cc"}}} href="tel:+573106409960" target={"_blank"}>
            <PhoneAndroidIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default MainPage;
