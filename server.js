const express = require("express");
const nedb = require("nedb");
const cors = require("cors");

// Set up express
const app = express();
app.use(cors());

const port = process.env.PORT || 3100;

app.listen(port, () => console.log("Listening at port " + port));
app.use(express.static("./"));
app.use(express.json({ limit: "200kb" }));

// Set up db
const messages = new nedb("database.db");
messages.loadDatabase();

const subscriptions = new nedb("subscriptions.db");
subscriptions.loadDatabase();

// Handle post requests
app.post("/api", (request, response) => {
  console.log("Request Got!");
  const data = request.body;
  console.log(data);

  // limit message length to 600 characters
  if (data.message.length > 600 && data.only_subscribe == null) {
    response.status(400).send("Message too long!");
    return;
  }

  // don't allow empty fields
  if (
    (data.message === "" || data.name === "" || data.email === "") &&
    data.only_subscribe == null
  ) {
    response.status(400).send("Invalid data!");
    return;
  }

  // add email to subscriptions db
  if (data.subscribe == true) {
    subscriptions.insert(data.email);
  }

  // add message to db if not only subscribing
  if (data.only_subscribe == null) {
    delete data.subscribe;
    messages.insert(data);
  }

  response.json({
    status: 200,
    data: JSON.stringify(request.body),
  });
});

// Handle get requests
app.get("/api", (request, response) => {
  messages.find({}, (err, data) => {
    response.json(data);
  });
});
