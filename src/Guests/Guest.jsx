import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Guest(props) {
  const theme = useTheme(); // importando o tema do material-ui

  const media = (
    <CardMedia
      component="img"
      sx={{ width: 100, alignSelf: "flex-end" }}
      image={props.convidado.img}
      alt={props.convidado.nome}
    />
  );

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        "&:hover, &:active, &:focus": {
          boxShadow: "5px 2px 20px #00838F",
        },
      }}
    >
      {props.even ? null : media}

      <CardContent>
        <Typography variant="h6" color={theme.palette.secondary.light}>
          {props.convidado.nome}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.secondary.contrastText}
        >
          {props.convidado.texto}
        </Typography>
      </CardContent>

      {props.even ? media : null}
    </Card>
  );
}
