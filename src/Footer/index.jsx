import React from "react";

import { Grid, Typography } from "@mui/material";
import Image from "mui-image"; // Componente para imagens

import imgFooter from "./media/logo2.svg";

export default function Footer() {
	return (
		<Grid
			container
			spacing={2}
			alignItems="center"
			paddingX={{ xs: 3, md: 20 }}
			paddingY={3}
			pb={5}
		>
			<Grid item xs={12} align="center">
				<Typography variant="body2">
					A Feira do Livro não se responsabiliza por qualquer incidente
					relacionado a ingestão de papel. Todos os livros na feira são vendidos
					como material literário e NÃO se encaixam na categoria alimentícia.
					Caso ocorra a ingestão de celulose, procure auxilio medico. Todos os
					direitos reservados Feira do Livro 2021.
				</Typography>
			</Grid>
			<Grid item xs={12} align="center">
				<Image src={imgFooter} sx={{ maxWidth: "30%" }}></Image>
			</Grid>
		</Grid>
	);
}
