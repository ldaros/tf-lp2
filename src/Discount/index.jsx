import React from "react";

import { Typography, TextField, Grid, Alert, Snackbar } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import Image from "mui-image";

import fotolivros from "./media/livros.webp";

const api = "https://tf-landingpage.glitch.me/api";
// const api = "http://localhost:3100/api";

export default function Discount() {
  const theme = useTheme();

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  // feedback
  const [loading, setLoading] = React.useState(false);
  const [snackOpen, setSnack] = React.useState(false);
  const [snackColor, setSnackColor] = React.useState("success");
  const [snackMessage, setSnackMessage] = React.useState("");

  const handleSnackClose = () => {
    setSnack(false);
  };

  const openSnack = (status) => {
    if (status) {
      setSnackColor("success");
      setSnackMessage("Inscrito com sucesso!");
      setSnack(true);
    } else {
      setSnackColor("error");
      setSnackMessage("Erro ao enviar mensagem!");
      setSnack(true);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={{ xs: 4, md: 9 }}
      pb={{ xs: 7, md: 10 }}
    >
      <Grid item xs={12} md={6} align="center">
        <Image
          src={fotolivros}
          align="center"
          sx={{ maxWidth: { xs: 180, md: 210 } }}
        />
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color={theme.palette.primary.dark}
          sx={{ mb: { xs: 1, md: 1 }, fontSize: { xs: "1.1em", md: "1.4em" } }}
          mt={2}
        >
          Se inscreva em nosso newsletter e ganhe 10% de desconto em qualquer
          livro!
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} align="center">
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="emails"
          label="E-mail"
          variant="outlined"
          fullWidth
          error={emailError.length > 0}
          helperText={emailError}
        />
        <LoadingButton
          onClick={sendForm}
          variant="contained"
          color="secondary"
          loading={loading}
          sx={{ marginTop: 2 }}
        >
          Inscrever-se
        </LoadingButton>
      </Grid>

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snackColor}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );

  function sendForm() {
    let passed = true;

    // validação do e-mail
    if (email.length === 0) {
      setEmailError("O e-mail é obrigatório");
      passed = false;
    } else if (!validateEmail(email)) {
      setEmailError("E-mail inválido");
      passed = false;
    } else {
      setEmailError("");
    }

    // se não passou na validação, não envia o formulário
    if (!passed) {
      return;
    }
    // envia o formulário
    SubmitData(email, setLoading, openSnack);
  }
}

// função que valida o e-mail
function validateEmail(email) {
  // expressão regular: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

/** Enviar dados de formulario */
async function SubmitData(email, loading, feedback) {
  loading(true);

  // empacotar os dados
  const data = {
    email: email,
    subscribe: true,
    only_subscribe: true,
    message: "",
    name: "",
  };

  // parametros da requisição
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  // enviar dados
  const request = await fetch(api, options);

  const recieve = await request.json();

  if (recieve.status === 200) {
    feedback(true);
  } else {
    feedback(false);
  }

  loading(false);
}
