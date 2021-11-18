import React from "react";
import Image from "mui-image";
import { Typography, TextField, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fotolivros from "./media/livros.png";

export default function Discount() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={12}
      position="relative"
    >
      <Grid Grid item xs={6} align="center">
        <Image
          src={fotolivros}
          align="center"
          sx={{ maxWidth: { xs: "80%", sm: "75%", md: "83%" } }}
        ></Image>
      </Grid>
      <Grid Grid item xs={6}>
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
      </Grid>
      <Grid item xs={12} alignSelf="center">
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </Grid>
      <Grid Grid item xs={12} align="center">
        <Button type="submit" variant="contained" color="primary">
          Inscrever-se
        </Button>
      </Grid>
    </Grid>
  );
}
