import React from "react";
import "./style.scss";
import { Grid, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { ReactComponent as LogoSVG } from "./logo.svg";

// TODO: Trocar a imagen de fundo por um video.
// TODO: Responsividade.

export default function index() {
	return (
		<Grid
			container
			spacing={1}
			className="header"
			alignItems="center"
			paddingX={3}
			paddingY={3}
		>
			<Grid item xs={2}></Grid>
			<Grid item xs={8} align="center">
				<LogoSVG className="Logo" />
			</Grid>
			<Grid item xs={2}></Grid>

			<Grid item xs={1}></Grid>

			<Grid item xs={10} align="center">
				<Typography color="white">
					Participe da Feira do Livro 2021!{" "}
				</Typography>

				<Typography color={lightGreen["A400"]}>
					Dias 8 a 15 de Dezembro.
				</Typography>
			</Grid>
			<Grid item xs={1}></Grid>
		</Grid>
	);
}
