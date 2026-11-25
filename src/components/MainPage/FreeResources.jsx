import {
    Card,
    Container,
    Grid,
    Typography,
    Divider,
    Button,
    Box
  } from "@mui/material";
  import {motion} from 'framer-motion';
  
  const FreeResources = () => {
    
    return (
      <Container sx={{ pt: 8, pb:{xs:2, md:0}, px:{xs:3, md:8} }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: 4,
            fontWeight: "bold",
          }}
          component={motion.div}
          initial={{translateX:-90, opacity:0}}
          whileInView={{translateX:0, opacity:1}}
          transition={{duration:1}}
          exit={{translateX:0}}
        >
            Recursos Gratuitos
        </Typography>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#fff",
            mb: 8,
            fontWeight: "bold",
          }}
          component={motion.div}
          initial={{translateX:90, opacity:0}}
          whileInView={{translateX:0, opacity:1}}
          transition={{duration:1}}
          exit={{translateX:0}}
        >
          Nuestra biblioteca de aprendizaje: material estratégico diseñado para acelerar tus resultados. Accede a guías y metodologías de cortesía para dar tus primeros pasos antes de profundizar en nuestras soluciones premium.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }} component={motion.div} initial={{translateX:-90, opacity:0}} whileInView={{translateX:0, opacity:1}} transition={{duration:1}} exit={{translateX:0}}>
            <Button 
                variant="contained" sx={{width:{xs:'100%', md:'330px'}, fontSize: {xs: "18px", md:"20px"}, backgroundColor:"#000032", color:"#fff", borderColor:"#f99f00", borderRadius:50, "&:hover":{backgroundColor:'transparent', color:"#000032",border:"1px solid #000032"}}}
                onClick={()=>window.open('https://docs.google.com/forms/d/e/1FAIpQLSdmdxYMo2-OnXVBjBrs2yZz-T0Qk7vMPkoPbcEg4zpaCvUNQg/viewform', '_blank')}
            >
                Acceder
            </Button>
        </Box>
        {/* <Divider
          sx={{
            backgroundColor: "#fff",
            width: "50%",
            height: 3,
            mx: "auto",
            my: 6,
          }}
          component={motion.div}
          initial={{translateY:90, opacity:0}}
          whileInView={{translateY:0, opacity:1}}
          transition={{duration:1}}
          exit={{translateX:0}}
        /> */}
      </Container>
    );
  };
  
  export default FreeResources;
  