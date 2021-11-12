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
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
    >
      <Grid item xs={12} align="center" mt={1}>
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            fontSize: { xs: "0.6em", sm: "0.7em", md: "0.8em" },
          }}
        >
          A Feira do Livro não se responsabiliza por qualquer incidente
          relacionado a ingestão de papel. Todos os livros na feira são vendidos
          como material literário e NÃO se encaixam na categoria alimentícia.
          Caso ocorra a ingestão de celulose, procure auxilio medico. Todos os
          direitos reservados Feira do Livro 2021.
        </Typography>
      </Grid>

      <Grid item xs={12} align="center" mt={2}>
        <Image
          src={imgFooter}
          sx={{ maxWidth: { xs: "60%", sm: "40%", md: "30%" } }}
        ></Image>
      </Grid>
    </Grid>
  );
}
