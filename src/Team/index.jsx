import React from "react";

import { Grid, Typography } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles";

import Member from "./Member";

import img1 from "./media/temp1.png";
import img2 from "./media/temp2.png";
import img3 from "./media/temp3.png";
import img4 from "./media/temp4.png";

// Lista de membros
const membros = [
  {
    nome: "A Pedra",
    img: img1,
    descricao: "Água mole pedra dura",
    twitter: "https://twitter.com/therock",
    facebook: "https://www.facebook.com/DwayneJohnson",
    instagram: "https://www.instagram.com/therock/",
    email: "apedra@gmail.com",
  },
  {
    nome: "John Cena",
    img: img3,
    descricao: "#速度与激情9# 早上好中国 现在我有冰激淋 我很喜欢冰激淋 ",
    email: "johncena@yahoo.com",
    github: "https://github.com/JohnCena1234567",
    linkedin: "https://www.linkedin.com/in/john-cena-aaa22118a/",
  },
  {
    nome: "Johnny Sins",
    descricao: "( ͡° ͜ʖ ͡°)ᕤ",
    img: img4,
    instagram: "https://www.instagram.com/_.johnny.sins.official/",
    twitter: "https://twitter.com/johnnysins",
  },
  {
    nome: "Vinicius Dieasel",
    img: img2,
    descricao:
      "Vroom🏍💨 vroom🚗💨 vroom🚕💨 vroom🚒💨 skrrt⚡vroom🏍💨 vroom🚗💨 vroom🚕💨 vroom🚒💨 skrrt⚡ ",
    email: "vruumvruum@vroom.com",
    twitter: "https://twitter.com/vindiesel",
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
