import { Container, Typography, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { motion } from "framer-motion";

const DigitalProducts = () => {
    return (
        <Container sx={{ pt: 8, pb: { xs: 2, md: 0 }, textAlign: "center" }}>
            <Typography
                sx={{
                    color: "#fff",
                    mb: 2,
                    fontWeight: "bold",
                    fontSize: { xs: "48px", md: "60px" },
                }}
                component={motion.h2}
                initial={{ translateX: -90, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Tienda Virtual
            </Typography>
            <Typography
                sx={{
                    color: "#f99f00",
                    fontWeight: "bold",
                    fontSize: { xs: "24px", md: "32px" },
                }}
                component={motion.h3}
                initial={{ translateX: 90, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Catálogo Oficial de Infoproductos &amp; Servicios
            </Typography>
            <Divider
                sx={{
                    backgroundColor: "#f99f00",
                    width: "50%",
                    height: 3,
                    mx: "auto",
                    my: 5,
                }}
                component={motion.div}
                initial={{ translateY: 90, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <Typography
                sx={{
                    color: "#fff",
                    fontSize: { xs: "18px", md: "22px" },
                    maxWidth: 850,
                    mx: "auto",
                    mb: 5,
                }}
                component={motion.p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Soluciones digitales, software automatizado, herramientas técnicas y asesorías de vanguardia en
                SG-SST y PESV para profesionales, empresas y consultores en Colombia.
            </Typography>
            <Button
                component={Link}
                to="/tienda-virtual"
                startIcon={<StorefrontIcon />}
                sx={{
                    background: "#f99f00",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: 18, md: 20 },
                    px: 5,
                    py: 1.5,
                    borderRadius: 30,
                    "&:hover": { background: "white", color: "#f99f00" },
                }}
            >
                Ver catálogo
            </Button>
        </Container>
    );
};

export default DigitalProducts;
