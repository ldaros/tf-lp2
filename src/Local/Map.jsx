import React from "react";
import { Box } from "@mui/material";

// URL do Mapa
const URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.470290394818!2d-52.3957468849259!3d-28.25375328256874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d3b037fc8edaa67!2sBourbon%20Shopping%20Passo%20Fundo!5e0!3m2!1spt-BR!2sbr!4v1630606985214!5m2!1spt-BR!2sbr";

export default function Map() {
  return (
    <Box
      component="iframe"
      src={URL}
      allowFullScreen=""
      title="Mapa"
      loading="lazy"
      width="100%"
      height="100%"
      sx={{
        borderRadius: "4px",
        boxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        overflow: "hidden",
        border: 0,
      }}
    />
  );
}
