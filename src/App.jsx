import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, LinearProgress, Grid, Hidden } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/MainPage/Footer";
import { useState } from "react";
import { useEffect } from "react";
import MainPage from "./components/MainPage/MainPage";
import { motion } from "framer-motion";

function App() {
  const [splash, setSplash] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    // setTimeout(() => {
    //       setSplash(false)
    //   }, 2000);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setSplash(false);
          return 0;
        }
        return oldProgress + 20;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <BrowserRouter>
      {splash && (
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            backgroundColor: "#000032",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.img
                src="images/logo-sst-colores-copia-min.png"
                alt="Logo Ingeniero Asesor SST"
                style={{ width: 200, height: 250 }}
                animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <LinearProgress
                variant="determinate"
                color="warning"
                value={progress}
                sx={{ width: "40%", height: 10, backgroundColor: "#fff" }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
      {!splash && <Navbar></Navbar>}
      {!splash && (
        <Box
          sx={{ pt: 15, backgroundColor: "" }}
          component={motion.div}
          initial={{ display: "none", opacity: 0 }}
          animate={{ opacity: 1, display: "block" }}
          transition={{ duration: 3 }}
          exit={{ display: "none", opacity: 0 }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Box>
      )}
      {!splash && <Footer></Footer>}
    </BrowserRouter>
  );
}

export default App;
