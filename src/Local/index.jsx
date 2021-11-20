import React from "react";

import { Grid, Typography, Grow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "mui-image"; // Componente para imagens

import imgLocal from "./media/img-local.svg";

// URL do Mapa
const MAPA =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.470290394818!2d-52.3957468849259!3d-28.25375328256874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d3b037fc8edaa67!2sBourbon%20Shopping%20Passo%20Fundo!5e0!3m2!1spt-BR!2sbr!4v1630606985214!5m2!1spt-BR!2sbr";

// Estiliza mapa dentre do padrão card-mui
const styleMapa = {
  borderRadius: "4px",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  overflow: "hidden",
  border: 0,
};

export default function Local() {
  const theme = useTheme(); // importando o tema do material-ui

  const [isVisible, setVisible] = React.useState(false);
  const [Animate, setAnimate] = React.useState(false);

  // Função para animação do componente
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(document.querySelector("#anim2"));

    if (isVisible) setAnimate(true);

    return () => observer.unobserve(document.querySelector("#anim2")); // clean up
  }, [Animate, isVisible]);

  const iframe = (
    <iframe
      src={MAPA}
      width="100%"
      height="100%"
      style={styleMapa}
      allowFullScreen=""
      loading="lazy"
      title="Mapa"
    ></iframe>
  );

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ backgroundColor: theme.palette.primary.main }}
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
      pb={{ xs: 5, md: 8 }}
    >
      <Grid item xs={12} align="center">
        <Typography
          variant="h5"
          align="center"
          color="white"
          sx={{ mb: { xs: 1, md: 3 }, fontSize: { md: "1.9em" } }}
          mt={-1}
        >
          Localização
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} align="center">
        <Image
          src={imgLocal}
          sx={{ maxHeight: { xs: "100px", md: "150px" }, mb: { md: 3 } }}
          fit="contain"
          easing="none"
          shift="bottom"
        />

        <Typography
          variant="body2"
          sx={{ fontSize: { md: "1rem" }, mb: { xs: 2 } }}
          color="white"
          mt={2}
        >
          Veja no mapa onde o evento será localizado. Diferente da anterior,
          nesta edição a Feira do Livro voltará a ser realizada no Bourbon
          Shopping.
        </Typography>
      </Grid>

      <Grow in={Animate} timeout={5000} id="anim2">
        <Grid item xs={12} md={6} sx={{ height: { xs: "350px", md: "400px" } }}>
          {Animate && iframe}
        </Grid>
      </Grow>
    </Grid>
  );
}
