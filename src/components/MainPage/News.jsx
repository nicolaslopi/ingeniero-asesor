import {
    Card,
    Container,
    Grid,
    Typography,
    Divider,
} from "@mui/material";
import { motion } from 'framer-motion';

const News = () => {

    const news = [
        {
            video: "noticia_autoevaluacion_estandares_minimos.mp4",
            poster: 'minituatura_noticia_autoevaluacion_estandares_minimos.jpg'
        },
        // {
        //     video: "noticia_autoevaluacion_estandares_minimos.mp4"
        // }
    ]

    return (
        <Container sx={{ pt: 8, pb: { xs: 2, md: 0 } }}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    color: "#f99f00",
                    mb: 4,
                    fontWeight: "bold",
                }}
                component={motion.div}
                initial={{ translateX: -90, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ translateX: 0 }}
            >
                Noticias
            </Typography>
            <Typography
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
            </Typography>
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
                {news.map((item, index) => (
                    <Card
                        key={index}
                        elevation={6}
                        sx={{ 
                            height: { xs: '300px', md: "350px", lg:'400px' }, 
                            width: { xs: '85%', sm: "42%", md: '45%' },
                            overflow: 'hidden', // Asegura que el video no se salga de los bordes redondeados
                            '& video': {
                              objectFit: 'fill',
                              width: '100%',
                              height: '100%',
                            }
                          }}
                        component={motion.div}
                        whileHover={{
                            boxShadow: "3px 3px 2px 1px #000032",
                        }}
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
                    </Card>
                ))}
            </Grid>
        </Container>
    );
};

export default News;
