import React from "react";
import Image from "mui-image";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fotolivros from "./media/livros.png";

export default function Discount() {
  const theme = useTheme();

  return (
    <>
      <Image
        src={fotolivros}
        sx={{ maxWidth: { xs: "60%", sm: "35%", md: "25%" } }}
      ></Image>
      <Typography
        variant="h5"
        align="center"
        color={theme.palette.primary.dark}
        sx={{ mb: { xs: 1, md: 3 }, fontSize: { md: "1.9em" } }}
        mt={-1}
      >
        Se inscreva em nosso newsletter e ganhe 10% de desconto em qualquer
        livro!
      </Typography>
      <Grid item xs={6}>
        <TextField
          alignSelf="center"
          id="email"
          label="email"
          type="email"
          variant="outlined"
          margin="normal"
        />
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </>
  );
}
