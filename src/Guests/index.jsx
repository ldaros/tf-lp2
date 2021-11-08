import React from "react";
import { Grid, Typography, Box } from "@mui/material"; // Componentes Material UI
import { cyan } from "@mui/material/colors"; // Cores do Material UI
import GuestCard from "./GuestCard"; // Componente de Card de convidado

// TODO: Responsividade

// Estilo texto de título
const headerStyle = {
  textAlign: "center",
  color: cyan[900],
  fontWeight: "bold",
};

// Estilo texto de descrição
const subHeaderStyle = {
  textAlign: "center",
  fontWeight: "normal",
  color: "#5A5A5A",
  fontSize: "0.95em",
};

export default function index() {
  return (
    <Grid container spacing={2} alignItems="center" paddingX={3} paddingY={3}>
      <Grid item xs={12}>
        {/* Titulo e subtitulo */}
        <Typography variant="h5" style={headerStyle} mb={2}>
          Convidados
        </Typography>
        <Typography style={subHeaderStyle} mb={3}>
          Confira algums dos autores presentes nesta edição da Feira do Livro:
        </Typography>
      </Grid>

      {/* 
        xs representa o tamnho de telas pequenas, como por exemplo, tablets e smartphones.
        xs={12} faz com que o componente ocupe 12 colunas em telas pequenas.
        md representa o tamanho de telas medias, como por exemplo, desktops.
        md={6} faz com que o componente passe a ocupar 6 colunas em telas medias.
      
        Leia a documentação do Material UI para mais informações sobre os tamanhos de telas: https://mui.com/components/grid/
      */}

      <Grid item xs={12} md={6}>
        <GuestCard tenorio />
      </Grid>
      <Grid item xs={12} md={6}>
        <GuestCard bueno />
      </Grid>
    </Grid>
  );
}
