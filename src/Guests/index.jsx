import React from "react";
import { Grid, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import GuestCard from "./GuestCard";

// TODO: Responsividade

const headerStyle = {
	textAlign: "center",
	color: cyan[900],
	fontWeight: "bold",
};

const subHeaderStyle = {
	textAlign: "center",
	fontWeight: "normal",
	color: "#5A5A5A",
	fontSize: "0.95em",
};

export default function index() {
	return (
		<Grid container spacing={2} alignItems="center" paddingX={3} paddingY={3}>
			<Grid item xs={12}>
				<Typography variant="h5" style={headerStyle} mb={2}>
					Convidados
				</Typography>

				<Typography style={subHeaderStyle} mb={3}>
					Confira algums dos autores presentes nesta edição da Feira do Livro:
				</Typography>
			</Grid>

			<Grid item xs={12} md={6}>
				<GuestCard tenorio />
			</Grid>
			<Grid item xs={12} md={6}>
				<GuestCard bueno />
			</Grid>
		</Grid>
	);
}
