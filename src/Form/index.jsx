import React from "react";

import {
  Grid,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { validateEmail, SubmitData } from "../Utils";

export default function Form() {
  // estado do formulário
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [checked, setChecked] = React.useState(true);

  // erros
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

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
      setSnackMessage("Mensagem enviada com sucesso!");
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
      alignItems="stretch"
      paddingX={{ xs: 3, sm: 8, md: 20, lg: 30 }}
      paddingY={3}
      pb={1}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          align="center"
          color="primary.dark"
          sx={{ fontSize: { md: "1.9em" } }}
          mb={1}
        >
          Entre em contato
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          label="Nome"
          variant="outlined"
          fullWidth
          error={nameError.length > 0}
          helperText={nameError}
        />
      </Grid>

      <Grid item xs={12} align="center">
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="E-mail"
          variant="outlined"
          fullWidth
          error={emailError.length > 0}
          helperText={emailError}
        />
      </Grid>

      <Grid item xs={12} align="center">
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          label="Mensagem"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          error={messageError.length > 0}
          helperText={messageError}
        />
      </Grid>

      <Grid item xs={12} md={6} align="center">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
                id="subscribe"
                defaultChecked={checked}
                color="secondary"
              />
            }
            label="Me inscreva no newsletter"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={12} md={6} align="center">
        <LoadingButton
          onClick={sendForm}
          variant="contained"
          color="secondary"
          fullWidth
          loading={loading}
        >
          Enviar
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

    // validação do nome
    if (name.length === 0) {
      setNameError("O nome é obrigatório");
      passed = false;
    } else if (name.length < 3) {
      setNameError("O nome deve ter no mínimo 3 caracteres");
      passed = false;
    } else {
      setNameError("");
    }

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

    // validação da mensagem
    if (message.length === 0) {
      setMessageError("A mensagem é obrigatória");
      passed = false;
    } else if (message.length < 10) {
      setMessageError("A mensagem deve conter mais de 10 caracteres");
      passed = false;
    } else if (message.length > 600) {
      setMessageError("A mensagem deve conter menos de 600 caracteres");
      passed = false;
    } else {
      setMessageError("");
    }

    // se não passou na validação, não envia o formulário
    if (!passed) {
      return;
    }

    // envia o formulário
    SubmitData(name, email, message, checked, null, setLoading, openSnack);
  }
}
