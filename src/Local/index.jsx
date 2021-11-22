import React from "react";

import { Grid, Typography, Grow } from "@mui/material";
import Image from "mui-image"; // Componente para imagens

import imgLocal from "./media/img-local.svg";

import Map from "./Map";

export default function Local() {
  const [isVisible, setVisible] = React.useState(false);
  const [Animate, setAnimate] = React.useState(false);

  // Função que controla o estado de visibilidade do mapa
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(document.querySelector("#anim2"));

    if (isVisible) setAnimate(true);

    return () => observer.unobserve(document.querySelector("#anim2")); // clean up
  }, [Animate, isVisible]);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ backgroundColor: "primary.main" }}
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
          {Animate && <Map />}
        </Grid>
      </Grow>
    </Grid>
  );
}
