import React from "react";
import { Grid, Typography, Slide } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles";

import Guest from "./Guest"; // Componente de Card de convidado

import imgBueno from "./media/bueno.webp"; // Imagem Perfil do Bueno
import imgTenorio from "./media/tenorio.webp"; // Imagem Perfil do Tenorio

const convidados = {
  tenorio: {
    nome: "Jeferson Tenório",
    texto:
      "Escritor de O beijo na parede, eleito o livro do ano pela Associação Gaúcha de Escritores.",
    img: imgTenorio,
  },
  bueno: {
    nome: "Eduardo Bueno",
    texto:
      "Eduardo Bueno é um jornalista, tradutor, escritor e youtuber no canal Buenas Ideias, onde narra a história do Brasil de forma descontraída.",
    img: imgBueno,
  },
};

export default function Guests() {
  const theme = useTheme(); // Importação do tema do Material UI

  return (
    <Grid
      container
      spacing={2}
      alignItems="stretch"
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
      pb={{ xs: 5, md: 8 }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.primary.dark}
          sx={{ fontSize: { md: "1.9em" } }}
          mb={1}
        >
          Convidados
        </Typography>

        <Typography
          mb={3}
          variant="body2"
          align="center"
          color={theme.palette.grayText}
          sx={{ fontSize: { md: "1em" } }}
        >
          Confira alguns dos autores presentes nesta edição da Feira do Livro:
        </Typography>
      </Grid>

      <Slide direction="right" in={true} timeout={1000} mountOnEnter>
        <Grid item xs={12} sm={6} md={6}>
          <Guest convidado={convidados.tenorio} />
        </Grid>
      </Slide>
      <Slide direction="left" in={true} timeout={1000} mountOnEnter>
        <Grid item xs={12} sm={6} md={6}>
          <Guest convidado={convidados.bueno} even />
        </Grid>
      </Slide>
    </Grid>
  );
}
