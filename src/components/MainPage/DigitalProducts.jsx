import { BorderColor } from "@mui/icons-material";
import {
    Card,
    Container,
    Grid,
    Typography,
    Divider,
    Button,
    Box
} from "@mui/material";
import { motion } from 'framer-motion';

const DigitalProducts = () => {

    const products = [
        {
            video: "software_planes_trabajo.mp4",
            poster: 'minituatura_noticia_autoevaluacion_estandares_minimos.jpg',
            title:'Software Planes de Trabajo SST y PESV',
            message:'COMPRAR LICENCIA SOFTWARE PLANES DE TRABAJO SST y PESV - $30.000 mensual o $390.000 anual.'
        },
        // {
        //     video: "noticia_autoevaluacion_estandares_minimos.mp4"
        // }
    ]

    return (
        <Container sx={{ pt: 8, pb: { xs: 2, md: 0 } }}>
            <Typography
                sx={{
                    textAlign: "center",
                    color: "#fff",
                    mb: 4,
                    fontWeight: "bold",
                    fontSize:{xs:'48px', md:'60px'}
                }}
                component={motion.div}
                initial={{ translateX: -90, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ translateX: 0 }}
            >
                Tienda Virtual: Herramientas Digitales
            </Typography>
            {/* <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    color: "#000032",
                    mb: 4,
                    fontWeight: "bold",
                }}
                component={motion.div}
                initial={{ translateX: 90, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ translateX: 0 }}
            >
                Mantente al día con las últimas actualizaciones en seguridad y salud en el trabajo.
            </Typography> */}
            <Divider
                sx={{
                    backgroundColor: "#f99f00",
                    width: "50%",
                    height: 3,
                    mx: "auto",
                    my: 6,
                }}
                component={motion.div}
                initial={{ translateY: 90, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ translateX: 0 }}
            />
            <Grid container justifyContent={'space-around'} alignItems={'center'} sx={{width:"100%", gap:{xs:5, md:0}}}>
                {products.map((item, index) => (
                    <Box
                        key={index}
                        // elevation={6}
                        sx={{ 
                            background:'#000032', 
                            // boxShadow: "0 0px 32px 0 rgba(255, 255, 255, 0.3)",
                            borderRadius:2,
                            width: { xs: '85%', sm: "42%", md: '45%' },
                            overflow: 'hidden', // Asegura que el video no se salga de los bordes redondeados
                            '& video': {
                              objectFit: 'contain',
                              width: '100%',
                              height: { xs: '300px', md: "350px", lg:'400px' },
                            }
                          }}
                        component={motion.div}
                        // whileHover={{
                        //     boxShadow: "3px 3px 2px 1px #fff",
                        // }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            // transition: { delay: index - index * 0.9, duration: 0.5 },
                        }}
                    >
                        <video controls poster={`images/${item.poster}`} width="100%" height="100%">
                            <source src={`videos/${item.video}`} type="video/mp4" width={'100%'}/>
                        </video>
                        <Grid container flexDirection={'column'}>
                            <Typography sx={{color:'white', py:3, textAlign:'center'}} fontSize={25}>{item.title}</Typography>
                            <Button 
                                component={motion.button} sx={{background:'#f99f00', py:1, color:'white', fontWeight:'bold', fontSize:20}} whileHover={{transition:{duration:0.1}, background:'white',color:'#f99f00'}}
                                onClick={()=>window.open(`https://wa.me/573106409960?text=${encodeURIComponent(item.message)}`, '_blank')}
                            >
                                Comprar
                            </Button>
                        </Grid>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
};

export default DigitalProducts;
