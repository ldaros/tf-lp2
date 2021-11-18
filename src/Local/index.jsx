import React from "react";

import { Grid, Typography, Grow, Card, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "mui-image"; // Componente para imagens
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import imgLocal from "./media/img-local.svg";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: -28.252762613612752, lng: -52.393430891121895 }}
    >
      <Marker
        position={{ lat: -28.252762613612752, lng: -52.393430891121895 }}
      />
    </GoogleMap>
  ))
);

export default function Local() {
  const theme = useTheme(); // importando o tema do material-ui

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ backgroundColor: theme.palette.primary.main }}
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
      pb={{ xs: 5, md: 8 }}
    >
      <Grid item xs={12} align="center">
        <Typography
          variant="h5"
          align="center"
          color="white"
          sx={{ mb: { xs: 1, md: 3 }, fontSize: { md: "1.9em" } }}
          mt={-1}
        >
          Localização
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} align="center">
        <Image
          src={imgLocal}
          sx={{ maxHeight: { xs: "100px", md: "150px" }, mb: { md: 3 } }}
          fit="contain"
          easing="none"
          shift="bottom"
        />

        <Typography
          variant="body2"
          sx={{ fontSize: { md: "1rem" }, mb: { xs: 2 } }}
          color="white"
          mt={2}
        >
          Veja no mapa onde o evento será localizado. Diferente da anterior,
          nesta edição a Feira do Livro voltará a ser realizada no Bourbon
          Shopping.
        </Typography>
      </Grid>

      <Grow in={true} timeout={5000}>
        <Grid item xs={12} md={6} sx={{ height: { xs: "350px", md: "400px" } }}>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhoVIXzoaaZKDSlUVIkoKizLJ5w7PNq64&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<Card sx={{ height: "100%" }} />}
            mapElement={<CardMedia sx={{ height: "100%", width: "100%" }} />}
          />
        </Grid>
      </Grow>
    </Grid>
  );
}
