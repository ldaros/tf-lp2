import React from "react";
import "./style.scss"; // Folha de estilo
import { Grid, Typography } from "@mui/material"; // Componentes Material UI
import { lightGreen } from "@mui/material/colors"; // Cores do material
import { ReactComponent as LogoSVG } from "./logo.svg"; // Logo Feira do Livro

// TODO: Trocar a imagen de fundo por um video.
// TODO: Responsividade.

export default function index() {
	return (
		// grid é um container que divide a tela em 12 colunas.
		<Grid
			container // Este componente se comporta como um container.
			spacing={1} // Espaçamento entre as colunas.
			className="header" // Classe CSS.
			alignItems="center" // Centraliza o conteúdo na vertical.
			paddingX={3} // Espaçamento horizontal.
			paddingY={3} // Espaçamento vertical.
		>
			<Grid item xs={2}></Grid> {/* Coluna vazia */}
			{/* Coluna com o logo */}
			<Grid item xs={8} align="center">
				<LogoSVG className="Logo" />
			</Grid>
			<Grid item xs={2}></Grid> {/* Coluna vazia */}
			<Grid item xs={1}></Grid> {/* Coluna vazia */}
			{/* Coluna com o título */}
			<Grid item xs={10} align="center">
				{/* Titulo abaixo da logo */}
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
