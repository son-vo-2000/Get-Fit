import Client from "../src/models/Client.js";

export const createNewExerciseOfClientId = async (req, res) => { 
    // find and fetch/get the matched clientId from database
    //
    const { exerciseName, duration } = req.body;
    const clientId = req.params.clientId;

    const client = await Client.findById(clientId);
    if (!client) return res.status(400).send("No client found");
  
    client.exercises.push({ name: exerciseName, duration: duration });
    await client.save();

    res.json(client);
}

export const getAllExerciseOfClientId = async (req, res) => {
    // find and fetch/get the matched clientId from database
    //
    const clientId = req.params.clientId;
  const client = await Client.findById(clientId);
  if (!client) return res.status(400).send("Can't find client");
  
  // send back to UI
  //
  res.json(client);
}

// change the state of complete(true/false) of each exercise
//
export const toggleCompleteExercise = async (req, res) => {
  const clientId = req.params.clientId;
  if(!clientId) return res.status(400).json("there is no such client");
  const index = req.params.index;
  if(!index) return res.stauts(400).json("There is no such excersice");

  const client = await Client.findById(clientId);
  if(!client) return res.status(400).json("Can't find your client");

  client.exercises[index].isCompleted = !client.exercises[index].isCompleted;
  await client.save();
  res.json(client)
}

export const deleteExerciseOfClientId = async (req, res) => {
    const clientId = req.params.clientId;

    const client = await Client.findById(clientId);
    if (!client) return res.status(400).send("No client found");

    const index = req.params.index;
    if(!index) return res.stauts(400).json("Can't find the exercise")
    
    client.exercises.splice(parseInt(index), 1)
    await client.save()
    res.json(client)
  }

export const updateExerciseOfClientId = async (req, res) => {
    const { exerciseName, duration } = req.body;
    const clientId = req.params.clientId;
    const client = await Client.findById(clientId)
    if (!client) return res.status(400).send("No client found");

    const index = req.params.index;
    if(!index) return res.status(400).json("Can't find the exercise")

    client.exercises[index] = { name: exerciseName, duration };
    await client.save();
    res.json(client);
  }