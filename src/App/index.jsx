// Componente App, renderiza o corpo da aplicação
import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, lightGreen } from "@mui/material/colors"; // Cores do material-ui
// import { Grid, Button } from "@mui/material";
import Hero from "../Hero";
import Guests from "../Guests";
import "./style.scss";

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: cyan[800], // #00838F
    },
    secondary: {
      main: lightGreen[700], // #689F38
    },
    accent: {
      main: lightGreen["A400"], // #B2FF59
    },
  },
});

export default class index extends Component {
  render() {
    return (
      // Componente ThemeProvider, aplica o tema personalizado
      <ThemeProvider theme={theme}>
        <Hero /> {/* Cabeçalho da pagina, onde fica o logo*/}
        <Guests /> {/* Componente Guests, onde fica a lista de convidados */}
      </ThemeProvider>
    );
  }
}
