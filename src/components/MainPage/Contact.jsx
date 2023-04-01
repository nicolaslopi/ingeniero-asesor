import * as React from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactWhatsapp from "react-whatsapp";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    variant: "success",
    vertical: "top",
    horizontal: "center",
    snackbarMessage: "Enviado con éxito",
  });
  const { vertical, horizontal, open, variant, snackbarMessage } = snackbar;
  const form = useRef();
  const handleClose = () => {
    setSnackbar({
      open: false,
      variant: "",
      vertical: "top",
      horizontal: "center",
      snackbarMessage: "",
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (name == "" || email == "" || phone == "" || message == "") {
      setSnackbar({
        open: true,
        variant: "error",
        vertical: "top",
        horizontal: "center",
        snackbarMessage: "Por favor llene todos los campos",
      });
    } else {
      emailjs
        .sendForm(
          "service_o8idcdc",
          "template_fbtz4b9",
          form.current,
          "zQUdA2RITc4jr1SZv"
        )
        .then(
          (result) => {
            console.log(result.text);
            // setName('')
            // setEmail('')
            // setPhone('')
            // setMessage('')
            setSnackbar({
              open: true,
              variant: "success",
              vertical: "top",
              horizontal: "center",
              snackbarMessage: "Enviado con éxito",
            });
          },
          (error) => {
            console.log(error.text);
            setSnackbar({
              open: true,
              variant: "error",
              vertical: "top",
              horizontal: "center",
              snackbarMessage: "Ha ocurrido un error",
            });
          }
        );
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#f99f00",
          mb: 4,
          fontWeight: "bold",
        }}
        component={motion.div}
        initial={{translateX:90, opacity:0}}
        whileInView={{translateX:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
      >
        Contacto
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
        initial={{translateY:90, opacity:0}}
        whileInView={{translateY:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
      >
        Cotiza aquí tu servicio y trabajemos juntos
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#f99f00",
          width: "40%",
          height: 3,
          mx: "auto",
          my: 4,
        }}
        component={motion.div}
        initial={{translateY:-90, opacity:0}}
        whileInView={{translateY:0, opacity:1}}
        transition={{duration:1}}
        exit={{translateX:0}}
      />
      <Card elevation={5} sx={{ minWidth: 120, p: 2 }} component={motion.div}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>
        <Grid container justifyContent="space-around">
          <Grid item xs={12} md={5}>
            <Box component="form" ref={form} onSubmit={sendEmail}>
              <Grid>
                <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                  <TextField
                    fullWidth
                    name="user_name"
                    label="Nombre"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                  <TextField
                    fullWidth
                    name="user_email"
                    label="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                  <TextField
                    fullWidth
                    name="contact_number"
                    sx={{ borderColor: "red" }}
                    label="Teléfono"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    name="message"
                    label="Dejanos un mensaje"
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mb: 1 }}>
                  <Button
                    variant="contained"
                    type="submit"
                    value="Send"
                    sx={{
                      width: "100%",
                      backgroundColor: "#f99f00",
                      color: "#000032",
                      fontSize: "20px",
                      "&:hover": {
                        backgroundColor: "#000032",
                        color: "#fff",
                      },
                    }}
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Box>
                <Button sx={{ color: "#efb603", fontSize: "16px", textTransform:"none" }} href="mailto:ingenieroasesorsst@gmail.com"
                  target={"_blank"}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>ingenieroasesorsst@gmail.com</span>
                </Button>
              </Box>
              <Box>
                <Button sx={{ color: "#efb603", fontSize: "16px", textTransform:"none" }} href="tel:+573226174846"
                  target={"_blank"}>
                  <PhoneAndroidIcon sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>3122377845</span>
                </Button>
              </Box>
              <Box>
                <Button sx={{ color: "#efb603", fontSize: "16px", textTransform:"none" }} href="https://web.facebook.com/profile.php?id=100090006045246"
                  target={"_blank"}>
                  <Facebook sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>Asesorías en Seguridad y Salud en el Trabajo</span>
                </Button>
              </Box>
              <Box>
                <Button sx={{ color: "#efb603", fontSize: "16px", textTransform:"none" }} href="https://www.instagram.com/ingenieroasesorsst/"
                  target={"_blank"}>
                  <Instagram sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>Asesorías en Seguridad y Salud en el Trabajo</span>
                </Button>
              </Box>
              <Box>
                <Button sx={{ color: "#efb603", fontSize: "16px", textTransform:"none" }} component={ReactWhatsapp} number="57-322-617-4846" message="Hello World!!!">
                  <WhatsApp sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>3122377845</span>
                </Button>
              </Box>
              <Box>
                <Button sx={{ color: "red", fontSize: "16px", textTransform:"none" }}>
                  <LocationOnIcon sx={{ mr: 2 }} />
                  <span style={{ color: "#000032" }}>Cali, Valle del Cauca, Colombia.</span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
      >
        <Alert severity={variant} variant="filled" sx={{ fontSize: "18px" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;

 {/* <Typography
                variant="body"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  my: 2,
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://web.facebook.com/profile.php?id=100090006045246"
                  target={"_blank"}
                >
                  <Facebook sx={{ mx: 2, color: "#f99f00" }} />
                  Asesorías
                </a>
              </Typography>
              <Typography
                variant="body"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  my: 2,
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "#000032" }}
                  href="https://www.instagram.com/ingenieroasesorsst/"
                  target={"_blank"}
                >
                  <Instagram sx={{ mx: 2, color: "#f99f00" }} />
                  Asesorías
                </a>
              </Typography>
              <Typography
                variant="body"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  my: 2,
                }}
              >
                <a
                  style={{ textDecoration: "none", color: "#000032" }}
                  href="https://www.instagram.com/ingenieroasesorsst/"
                  target={"_blank"}
                >
                  <WhatsApp sx={{ mx: 2, color: "#f99f00" }} />
                  Asesorías
                </a>
              </Typography> */}