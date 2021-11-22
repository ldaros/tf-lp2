import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function Guest(props) {
  const media = (
    <CardMedia
      component="img"
      sx={{
        width: { xs: 100, md: 130 },
        height: { xs: 100, md: 130 },
        alignSelf: "flex-end",
      }}
      image={props.convidado.img}
      alt={props.convidado.nome}
    />
  );

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "primary.main",
        height: "100%",
        "&:hover, &:active, &:focus": {
          boxShadow: "5px 2px 20px #00838F",
        },
      }}
    >
      {props.even ? null : media}

      <CardContent>
        <Typography variant="h6" color="secondary.light">
          {props.convidado.nome}
        </Typography>
        <Typography variant="body2" color="secondary.contrastText">
          {props.convidado.texto}
        </Typography>
      </CardContent>

      {props.even ? media : null}
    </Card>
  );
}
