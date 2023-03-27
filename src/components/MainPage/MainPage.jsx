import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "./Banner";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const MainPage = () => {
    return (
        <Box sx={{backgroundColor:''}}>
            <Grid>
                <Grid item xs={12} md={12}  id="#" sx={{backgroundColor:"#000032"}}>
                    <Banner/>
                </Grid>
                <Grid item xs={12} md={12}  id="nosotros" sx={{backgroundColor:"#f99f00"}}>
                    <AboutUs/>                    
                </Grid>
                <Grid item xs={12} md={12}  id="servicios" sx={{backgroundColor:"#fff"}}>
                    <Services/>                    
                </Grid>
                <Grid item xs={12} md={12}  id="clientes" sx={{backgroundColor:"#000032"}}>
                   <Clients/>                     
                </Grid>
                <Grid item xs={12} md={12}  id="contacto" sx={{backgroundColor:"#fff"}}>
                   <Contact/>                     
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;