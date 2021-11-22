export function validateEmail(email) {
  // expressão regular: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

/** Enviar dados de formulario */
export async function SubmitData(
  name,
  email,
  message,
  subscribe,
  only_subscribe,
  loading,
  feedback
) {
  const api = "https://tf-landingpage.glitch.me/api";
  // const api = "http://localhost:3100/api";

  loading(true);

  // empacotar os dados
  const data = {
    name: name ? name : "",
    email: email,
    message: message ? message : "",
    subscribe: subscribe,
  };

  if (only_subscribe) {
    data.only_subscribe = true;
  }

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
