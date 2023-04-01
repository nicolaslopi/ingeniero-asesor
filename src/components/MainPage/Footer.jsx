import { Button, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Container sx={{display:"flex", justifyContent:"center", textAlign:"center", py:2}}>
            <Grid>
            <Typography component="a" href="/">
                <img
                  width={51}
                  height={55}
                  src="images/logo-sst-colores-copia-min.png"
                  alt="logo-sst-colores"
                  loading="lazy"
            />
            </Typography>
            <p style={{color:'white'}}>Copyright © 2023 Ingeniero Asesor SST</p>
            </Grid>
        </Container>
    );
}

export default Footer;