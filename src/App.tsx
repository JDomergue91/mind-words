import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Glossary from './pages/Glossary';
import WordGenerator from './pages/WordGenerator';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

// Définition du thème
const theme = createTheme({
  palette: {
    primary: {
      main: '#034c8d', // Bleu
    },
    secondary: {
      main: '#f7a83e', // Orange
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/word-generator" element={<WordGenerator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
