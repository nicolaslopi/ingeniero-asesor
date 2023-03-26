import * as React from 'react';  
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
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    variant: "success",
    vertical: "top",
    horizontal: "center",
    snackbarMessage: "Enviado con éxito"
  });
  const { vertical, horizontal, open, variant, snackbarMessage } = snackbar;
  const form = useRef();
  const handleClose = () => {
    setSnackbar({
      open: false,
      variant: "",
      vertical: "top",
      horizontal: "center",
      snackbarMessage: ""})
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if(name == '' || email == '' || phone == '' || message == ''){
      setSnackbar({
        open: true,
        variant: "error",
        vertical: "top",
        horizontal: "center",
        snackbarMessage: "Por favor llene todos los campos"
      })
    }else{
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
            snackbarMessage: "Enviado con éxito"
          })
        },
        (error) => {
          console.log(error.text);
          setSnackbar({
            open: true,
            variant: "error",
            vertical: "top",
            horizontal: "center",
            snackbarMessage: "Ha ocurrido un error"
          })
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
      >
        Contactanos
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#000032",
          mb: 4,
          fontWeight: "bold",
        }}
      >
        Trabajemos juntos
      </Typography>
      <Card elevation={5} sx={{ minWidth: 120, p: 2 }}>
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
                      "&:hover":{
                        backgroundColor: "#000032",
                        color: "#fff",
                      }
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
              <Typography
                variant="body"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                  my: 2,
                }}
              >
                <EmailIcon sx={{ mx: 2 }}></EmailIcon>{" "}
                <a href="mailto:ingenieroasesorsst@gmail.com">
                  ingenieroasesorsst@gmail.com
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
                <PhoneAndroidIcon sx={{ mx: 2 }}></PhoneAndroidIcon><a href="tel:+573226174846">
                3122377845
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal}}
        onClose={handleClose}
      >
        <Alert severity={variant} variant="filled" sx={{fontSize:"18px"}}>{snackbarMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
