const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Client = require("./models/Decks");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const PORT = 5000;

// user: trongsonqn77  password: xXEyKgtUaZGqcYD3
// connect to the database. We want to listen to PORT after when we succesfully connected to the database
// we also need .env to hide the database url
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Listening");
  app.listen(PORT);
});

// use post b/c we gonna create new client
//
app.post("/clients", async (req, res) => {

  const newClient = new Client({
    title: req.body.clientName,
  });

  // save to the database
  const createdClient = await newClient.save();

  // return the new client(object) to the user
  res.json(createdClient);
});
