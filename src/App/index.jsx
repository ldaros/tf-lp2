import React, { Component } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, lightGreen } from "@mui/material/colors"; // Cores do material-ui

import Hero from "../Hero";
import Guests from "../Guests";
import Localização from "../Localização";

// Tema personalizado
const theme = createTheme({
	palette: {
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

export default class App extends Component {
	render() {
		return (
			// Componente ThemeProvider, aplica o tema personalizado
			<ThemeProvider theme={theme}>
				<Hero /> {/* Cabeçalho da pagina, onde fica o logo*/}
				<Guests /> {/* Componente Guests, onde fica a lista de convidados */}
				<Localização />{" "}
				{/* Componente de Localização, onde fica a localização do evento */}
			</ThemeProvider>
		);
	}
}
