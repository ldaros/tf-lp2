import React from "react";

import { Grid, Typography } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles"; // Estilos Material UI
import Image from "mui-image"; // Componente para imagens

import Logo from "./media/logo.svg";
import BG from "./media/head_temp.png";

// TODO: Trocar a imagen de fundo por um video.

export default function Hero() {
	const theme = useTheme();

	return (
		<Grid
			container // Este componente se comporta como um container.
			spacing={1} // Espaçamento entre as colunas.
			className="header" // Classe CSS.
			alignItems="center" // Centraliza o conteúdo na vertical.
			paddingX={{ xs: 3, md: 20 }}
			paddingY={4} // Espaçamento vertical.
			sx={{
				backgroundImage: `url(${BG})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			{/* Coluna com o logo */}
			<Grid item xs={12} align="center">
				<Image
					src={Logo}
					sx={{ maxHeight: { xs: "120px", md: "190px" } }}
					fit="contain"
					easing="none"
					shift="bottom"
				/>
			</Grid>

			{/* Coluna com o título */}
			<Grid item xs={12} align="center" mt={2}>
				<Typography variant="body1" color="white" fontWeight="bold">
					Participe da Feira do Livro 2021!
				</Typography>
				<Typography
					variant="body1"
					fontWeight="bold"
					color={theme.palette.secondary.light}
				>
					Dias 8 a 15 de Dezembro.
				</Typography>
			</Grid>
		</Grid>
	);
}
