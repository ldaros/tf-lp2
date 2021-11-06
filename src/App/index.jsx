import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { cyan, lightGreen } from "@mui/material/colors";
import { Container, Button } from "@mui/material";
import "./style.scss";

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: cyan[800],
    },
    secondary: {
      main: lightGreen[700],
    },
    accent: {
      main: lightGreen["A400"],
    },
  },
});

export default class index extends Component {
  render() {
    return (
      // cores do material-ui
      <ThemeProvider theme={theme}>
        <Container>
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
        </Container>
      </ThemeProvider>
    );
  }
}
