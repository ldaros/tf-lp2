import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, lightGreen } from "@mui/material/colors";
// import { Grid, Button } from "@mui/material";
import Hero from "../Hero";
import Guests from "../Guests";
import Localização from "../Localização";
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
			// cores do material-ui
			<ThemeProvider theme={theme}>
				<Hero />
				<Guests />
				<Localização />
			</ThemeProvider>
		);
	}
}
