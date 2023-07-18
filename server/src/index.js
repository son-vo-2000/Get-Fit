const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Client = require("./models/Client");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

const PORT = 5000;

// user: trongsonqn77  password: xXEyKgtUaZGqcYD3
// connect to the database. We want to listen to PORT after when we succesfully connected to the database
// we also need .env to hide the database url
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Listening");
  app.listen(PORT);
});

// Use post when push data
// Use get when get/fetch data from somewhere
//

app.get("/clients", async (req, res) => {
  // fetch all clients from database and send back to the UI
  //
  const clients = await Client.find();

  // send back to UI
  //
  res.json(clients);
});

app.post("/clients", async (req, res) => {
  const newClient = new Client({
    name: req.body.clientName,
  });

  // save to the database
  const createdClient = await newClient.save();

  // return the new client(object) to the user
  res.json(createdClient);
});

app.delete("/clients/:clientId", async (req, res) => {
  // get the id from URL
  const clientId = req.params.clientId;

  // delete client from database
  const client = await Client.findByIdAndDelete(clientId);

  // return the deleted client
  res.json(client);
});

app.post("/clients/:clientId/exercises", async (req, res) => {
  // find and fetch/get the matched clientId from database
  //
  const clientId = req.params.clientId;
  const client = await Client.findById(clientId);

  if (!client) return res.status(400).send("No ");

  const { exerciseName, duration } = req.body;
  client.exercises.push({ name: exerciseName, duration: duration });
  await client.save();
  res.json(client);
});

app.get("/clients/:clientId/exercises", async (req, res) => {
  // find and fetch/get the matched clientId from database
  //
  const clientId = req.params.clientId;
  const client = await Client.findById(clientId);
  if (!client) return res.status(400).send("No ");
  
  // send back to UI
  //
  res.json(client);
});

app.delete("/clients/:clientId/exercises/:index", async (req, res) => {
  const clientId = req.params.clientId
  const client = await Client.findById(clientId)
  const index = req.params.index;
  if (!client) return res.status(400).send("No client found")
  
  client.exercises.splice(parseInt(index), 1)
  await client.save()
  res.json(client)
})