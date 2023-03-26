import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import { Box } from '@mui/material';
import Footer from './components/MainPage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
      <Navbar></Navbar>
      <Box sx={{ pt: 15, backgroundColor:'' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Box>
      <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

