import React from "react";

import { Grid, Typography } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles"; // Estilos Material UI
import Image from "mui-image"; // Componente para imagens

import Logo from "./media/logo.svg";
import BG from "./media/head_temp.png";
import Video from "./media/video_bg.webm";

const videoBg = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
};

export default function Hero() {
  const theme = useTheme();

  return (
    <Grid
      container // Este componente se comporta como um container.
      spacing={1} // Espaçamento entre as colunas.
      className="header" // Classe CSS.
      alignItems="center" // Centraliza o conteúdo na vertical.
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={4} // Espaçamento vertical.
      position="relative" // Posição relativa.
    >
      <video autoPlay loop muted controls={false} style={videoBg} poster={BG}>
        <source src={Video} type="video/webm" />
      </video>

      {/* Coluna com o logo */}
      <Grid item xs={12} align="center">
        <Image
          src={Logo}
          sx={{ maxHeight: { xs: "120px", sm: "150px", md: "190px" } }}
          fit="contain"
          easing="none"
          shift="bottom"
        />
      </Grid>

      {/* Coluna com o título */}
      <Grid item xs={12} align="center" mt={2}>
        <Typography
          variant="body1"
          color="white"
          fontWeight="bold"
          sx={{ fontSize: { md: "1.4em" } }}
        >
          Participe da Feira do Livro 2021!
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color={theme.palette.secondary.light}
          sx={{ fontSize: { md: "1.4em" } }}
        >
          Dias 8 a 15 de Dezembro.
        </Typography>
      </Grid>
    </Grid>
  );
}
