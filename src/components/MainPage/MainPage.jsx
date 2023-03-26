import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Banner from "./Banner";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";

const MainPage = () => {
    return (
        <Box sx={{backgroundColor:''}}>
            <Grid>
                <Grid item xs={12} md={12}  id="#" sx={{backgroundColor:"#000032"}}>
                    <Banner/>
                </Grid>
                <Grid item xs={12} md={12}  id="services" sx={{backgroundColor:"#fff"}}>
                    <Services/>                    
                </Grid>
                <Grid item xs={12} md={12}  id="clients" sx={{backgroundColor:"#000032"}}>
                   <Clients/>                     
                </Grid>
                <Grid item xs={12} md={12}  id="contact" sx={{backgroundColor:"#fff"}}>
                   <Contact/>                     
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainPage;