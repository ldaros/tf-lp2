import React from "react";
import "./style.scss";
import tenorio from "./tenorio.png";
import bueno from "./bueno.png";
import { Grid, Typography, Box } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

const subText = {
  fontSize: "0.8rem",
  lineHeight: "unset",
};

const headerText = {
  fontSize: "1.1rem",
  fontWeight: "bold",
};

export default function index(props) {
  if (props.tenorio)
    return (
      <Grid container spacing={1} className="guest-card" mb={1} pl={1} pr={1}>
        <Grid item xs={4} sx={{ alignSelf: "flex-end" }}>
          <img src={tenorio} alt="perfil"></img>
        </Grid>

        <Grid item xs={8}>
          <Typography
            variant="h6"
            color={lightGreen["A400"]}
            style={headerText}
          >
            Jeferson Tenório
          </Typography>
          <Typography style={subText}>
            Escritor de O beijo na parede, eleito o livro do ano pela Associação
            Gaúcha de Escritores.
          </Typography>
        </Grid>
      </Grid>
    );
  else if (props.bueno)
    return (
      <Grid container spacing={1} className="guest-card" mb={1} pl={1} pr={1}>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            color={lightGreen["A400"]}
            style={headerText}
          >
            Eduardo Bueno
          </Typography>
          <Typography style={subText}>
            Eduardo Bueno é um jornalista, tradutor, escritor e youtuber no
            canal "Buenas Ideias", onde narra a história do Brasil de forma
            descontraída.
          </Typography>
        </Grid>

        <Grid item xs={4} sx={{ alignSelf: "flex-end" }}>
          <img src={bueno} alt="perfil"></img>
        </Grid>
      </Grid>
    );
}
