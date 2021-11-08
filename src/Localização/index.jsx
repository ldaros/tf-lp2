import React from "react";
import "./style.scss";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as ImgLocalizacao } from "./img-localizacao.svg";

const TextoLocalizacao = {
	fontSize: "35px",
	fontHeight: "bold",
};

export default function LocalizacaoCard() {
	const theme = useTheme(); // importando o tema do material-ui

	return (
		<Grid
			sx={{ backgroundColor: theme }}
			x
			container
			spacing={1}
			className="header"
			alignItems="center"
			paddingX={3}
			paddingY={3}
		>
			<Grid item xs={12}>
				<Typography
					style={TextoLocalizacao}
					variant="h6"
					color="white"
					className="texto-localizacao"
					textAlign="center"
				>
					Localização
				</Typography>
			</Grid>

			{/* arrumar posicionamento da imagem */}
			<Grid>
				<ImgLocalizacao className="localizacao" />
			</Grid>
			{/* adicionando grid para ajustar elementos */}
			<Grid xs={1}></Grid>

			<Grid item xs={6}>
				{/*TODO: Ajustar margins, paddings, espaçamento e imagem.
            Bordas no mapa */}

				<Typography style={TextoLocalizacao} color="white">
					Veja no mapa onde o evento será localizado. Diferente da anterior,
					nesta edição a Feira do Livro voltará a ser realizada no Bourbon
					Shopping.
				</Typography>
			</Grid>
			<Grid>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.470290394818!2d-52.3957468849259!3d-28.25375328256874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d3b037fc8edaa67!2sBourbon%20Shopping%20Passo%20Fundo!5e0!3m2!1spt-BR!2sbr!4v1630606985214!5m2!1spt-BR!2sbr"
					width="100%"
					height="350"
					allowfullscreen=""
					loading="lazy"
					border-radius="55px"
				></iframe>
			</Grid>
		</Grid>
	);
}
