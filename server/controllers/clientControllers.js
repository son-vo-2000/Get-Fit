import  Client from "../src/models/Client.js";

// get all clients base on userid
export const getAllClients = async (req, res) => {
  // fetch all clients from database and send back to the UI
  //
  const clients = await Client.find({user_id: req.body.userId});

  // send back to UI
  //
  res.json(clients);
}

// create new client
export const createNewClient = async (req, res) => {

  if(!req.body.input.clientName || ! req.body.input.userId) return res.status(400).json("Please enter all fields");

  const newClient = new Client({
    name: req.body.input.clientName,
    user_id: req.body.input.userId
  });

  // save to the database
  const createdClient = await newClient.save();

  // return the new client(object) to the user
  res.json(createdClient);
   
}

export const deleteClient = async (req, res) => {
    // get the id from URL
    const clientId = req.params.clientId;
    if(!clientId) return res.status(400).json("Can't find client id");

    // delete client from database
    const client = await Client.findByIdAndDelete(clientId);
    if(!client) return res.status(400).json("Can't find client");

    // return the deleted client
    res.json(client);
  }