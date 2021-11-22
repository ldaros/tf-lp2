import React from "react";

import { Grid, Typography } from "@mui/material"; // Componentes Material UI

import img1 from "./media/pedro.webp";
import img2 from "./media/luan.webp";
import img3 from "./media/victor.webp";
import img4 from "./media/emanuel.webp";

import Member from "./Member";
import Contact from "./Contact";

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
  const [open, setOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState(0);

  const handleOpen = (i) => {
    setOpen(true);
    setSelectedMember(i);
  };

  const handleClose = () => setOpen(false);

  // Criando um componente para cada membro
  const membrosList = membros.map((membro, i) => (
    <Grid item xs={6} sm={3} md={3} key={i} onClick={() => handleOpen(i)}>
      <Member membro={membro} />
    </Grid>
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
          color="primary.dark"
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

      {/* Modal */}
      <Contact
        open={open}
        handleClose={handleClose}
        membro={membros[selectedMember]}
      />
    </Grid>
  );
}
