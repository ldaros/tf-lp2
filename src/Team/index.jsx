import React from "react";

import { Grid, Typography } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles";

import Member from "./Member";

import img1 from "./media/pedro.png";
import img2 from "./media/luan.png";
import img3 from "./media/victor.png";
import img4 from "./media/emanuel.png";

// Lista de membros
const membros = [
  {
    nome: "Luan Daros",
    img: img2,
    descricao: "Estudante do projeto #TeuFuturo",
    linkedin: "https://www.linkedin.com/in/darosluan/",
    github: "https://github.com/ldaros",
    email: "darosluan@gmail.com",
  },
  {
    nome: "Victor André Gopinger de Morais",
    img: img3,
    descricao: "Estudante do projeto #TeuFuturo",
    email: "victor.andre.morais@gmail.com ",
    github: "https://github.com/victormorais123",
    linkedin: "https://www.linkedin.com/in/victor-andre-gopinger-de-morais/",
  },
  {
    nome: "Emanuel Mello de Oliveira",
    descricao: "Estudante do projeto #TeuFuturo",
    img: img4,
    email: "emanuel.mellodeoliveira@gmail.com ",
    github: "https://github.com/emanuel0706",
    linkedin: "https://www.linkedin.com/in/emanuel-mello-de-oliveira/",
  },
  {
    nome: "Pedro Henrique do Amarante",
    img: img1,
    descricao: "Estudante do projeto #TeuFuturo",
    email: "pedro.hamarante0812@gmail.com",
    github: "https://github.com/PedroAmarante0812",
    linkedin: "https://www.linkedin.com/in/pedro-henrique-do-amarante/",
  },
];

export default function Team() {
  const theme = useTheme(); // Importação do tema do Material UI

  // Criando um componente para cada membro
  const membrosList = membros.map((membro, i) => (
    <Grid item xs={6} md={3} key={"t" + i}>
      <Member membro={membro} />
    </Grid>
  ));

  return (
    <Grid
      container
      spacing={2}
      alignItems="stretch"
      paddingX={{ xs: 3, md: 20 }}
      paddingY={3}
      pb={5}
      sx={{ backgroundColor: "#EDEDED" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.primary.dark}
          mb={1}
        >
          Nosso Time
        </Typography>

        <Typography mb={3} variant="body2" align="center" color="#656565">
          Pressione no avatar para obter informações sobre contato
        </Typography>
      </Grid>

      {membrosList}
    </Grid>
  );
}
