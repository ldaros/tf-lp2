import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, lightGreen } from "@mui/material/colors"; // Cores do material-ui

import Hero from "./Hero";
import Guests from "./Guests";
import Local from "./Local";
import Discount from "./Discount";
import Team from "./Team";
import Form from "./Form";
import Footer from "./Footer";

// Tema personalizado
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: cyan[800], // #00838F
      dark: cyan[900], // #006064
      contrastText: "#fff",
    },
    secondary: {
      main: lightGreen[700], // #689F38
      light: lightGreen["A400"], // #B2FF59
      contrastText: "#fff",
    },
    grayText: "#656565",
  },
});

export default function App() {
  return (
    // Componente ThemeProvider, aplica o tema personalizado
    <ThemeProvider theme={theme}>
      <Hero /> {/* Cabeçalho da pagina */}
      <Guests /> {/* Seção Convidados */}
      <Local /> {/* Seção Localização */}
      <Discount /> {/* Seção Disconto */}
      <Team /> {/* Seção Equipe */}
      <Form /> {/* Formulário */}
      <Footer /> {/* Rodapé */}
    </ThemeProvider>
  );
}
