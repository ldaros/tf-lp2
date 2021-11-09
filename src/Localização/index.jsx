import React from "react";
import "./style.scss";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as ImgLocalizacao } from "./img-localizacao.svg";

const TextoLocalizacao = {
	fontSize: "35px",
	fontHeight: "bold",
	paddingX: "3px",
	paddingY: "3px",
	margin: "15px",
};

const TituloLocalizacao = {
	fontSize: "35px",
	fontHeight: "bold",
	paddingX: "3px",
	paddingY: "3px",
};

export default function LocalizacaoCard() {
	const theme = useTheme(); // importando o tema do material-ui

	return (
		<Grid
			className="grid-localizacao"
			sx={{ backgroundColor: theme }}
			spacing={1}
			alignItems="center"
			paddingX={3}
			paddingY={3}
		>
			<Grid xs={12}>
				<Typography
					style={TituloLocalizacao}
					variant="h6"
					color="white"
					textAlign="center"
				>
					Localização
				</Typography>
			</Grid>

			{/* arrumar posicionamento da imagem */}
			<Grid className="localizacao">
				<ImgLocalizacao />
			</Grid>

			{/*TODO: Ajustar margins, paddings, espaçamento e imagem.
			 */}

			<Grid>
				<Typography color="white">
					Veja no mapa onde o evento será localizado. Diferente da anterior,
					nesta edição a Feira do Livro voltará a ser realizada no Bourbon
					Shopping.
				</Typography>
			</Grid>
			<Grid className="mapa-localizacao">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.470290394818!2d-52.3957468849259!3d-28.25375328256874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d3b037fc8edaa67!2sBourbon%20Shopping%20Passo%20Fundo!5e0!3m2!1spt-BR!2sbr!4v1630606985214!5m2!1spt-BR!2sbr"
					width="552px"
					height="350px"
					loading="lazy"
					border-radius="8px"
				></iframe>
			</Grid>
		</Grid>
	);
}
