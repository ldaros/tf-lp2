import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function Member(props) {
  return (
    <Card
      sx={{
        height: "100%",
        cursor: "pointer",
        "&:hover, &:active, &:focus": {
          boxShadow: "11px 2px 54px #00838F",
        },
      }}
    >
      <CardMedia
        component="img"
        image={props.membro.img}
        alt={props.membro.nome}
      />

      <CardContent>
        <Typography variant="body1" align="center" fontWeight="bold">
          {props.membro.nome}
        </Typography>
      </CardContent>
    </Card>
  );
}
