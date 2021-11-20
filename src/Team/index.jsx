import React from "react";

import { Grid, Typography, Slide } from "@mui/material"; // Componentes Material UI
import { useTheme } from "@mui/material/styles";

import loadable from "@loadable/component";

import img1 from "./media/pedro.webp";
import img2 from "./media/luan.webp";
import img3 from "./media/victor.webp";
import img4 from "./media/emanuel.webp";

const Member = loadable(() => import("./Member"));

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

  const [isVisible, setVisible] = React.useState(false);
  const [Animate, setAnimate] = React.useState(false);

  // Função para animação do componente
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(document.querySelector("#anim1"));

    if (isVisible) setAnimate(true);

    return () => observer.unobserve(document.querySelector("#anim1")); // clean up
  }, [Animate, isVisible]);

  let timeout = 1000;

  // Criando um componente para cada membro
  const membrosList = membros.map((membro, i) => (
    <Slide
      direction="right"
      in={Animate}
      timeout={(timeout += 500)}
      key={"t" + i}
    >
      <Grid item xs={6} sm={3} md={3}>
        {Animate && <Member membro={membro} />}
      </Grid>
    </Slide>
  ));

  return (
    <Grid
      container
      spacing={2}
      alignItems="stretch"
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
      pb={{ xs: 5, md: 8 }}
      sx={{ backgroundColor: "#EDEDED", overflowX: "hidden" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          color={theme.palette.primary.dark}
          sx={{ fontSize: { md: "1.9em" } }}
          mb={1}
        >
          Nosso Time
        </Typography>

        <Typography
          mb={3}
          variant="body2"
          align="center"
          color="#656565"
          sx={{ fontSize: { md: "1em" } }}
          id="anim1"
        >
          Pressione no avatar para obter informações sobre contato
        </Typography>
      </Grid>

      {membrosList}
    </Grid>
  );
}
