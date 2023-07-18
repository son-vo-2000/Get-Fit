import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Clients from "./Clients";

function ClientExercises() {
  const [exerciseName, setExcerciseName] = useState("");
  const [duration, setDuration] = useState("");
  const [completed, setCompleted] = useState(false);
  const [cards, setCards] = useState([]);
  const [client, setClient] = useState('')
  const { clientId } = useParams();

  // fetch all exercise cards from the backend
  useEffect(() => {
    async function fetchCards() {
      // remember fectch return object that has json method
      // so u need to convert json
      //
      const selectedClient = await fetch(
        `http://localhost:5000/clients/${clientId}/exercises`,
      ).then((reponse) => reponse.json());

      setClient(selectedClient);
      setCards(selectedClient.exercises);
    }
    fetchCards();
  }, []);

  // create new cards
  const handleCreateExercise = async (event) => {
    event.preventDefault();
    const serverCard = await fetch(
      `http://localhost:5000/clients/${clientId}/exercises`,
      {
        method: "POST",
        body: JSON.stringify({ exerciseName, duration }),
        headers: { "Content-Type": "application/json" },
      },
    ).then((reponse) => reponse.json());
    setCards(serverCard.exercises);
    setDuration("");
    setExcerciseName("");
  };

  // delete card
  const handleDeleteCard = async (index) => {
    if (!clientId) return;
    const updatedCards = await fetch(`http://localhost:5000/clients/${clientId}/exercises/${index}`, {
      method: "DELETE",
    }).then(reponse => reponse.json());

    //update cards UI
    setCards(updatedCards.exercises)
  };

  return (
    <div className="App" onSubmit={handleCreateExercise}>
      <h1>{client.name}</h1>
      <form>
        <label htmlFor="exercise-name">New Exercise</label>
        <input
          id="exercise-name"
          type="text"
          value={exerciseName}
          onChange={(e) => setExcerciseName(e.target.value)}
        />
        <label htmlFor="duration">Duration</label>
        <input
          id="duration"
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button>Create</button>
      </form>
      <ul className="clients-card-container">
        {cards.map((card, index) => (
          <div key={index}>
            <li className="clients-card">{card.name}</li>
            <li className="clients-card">{card.duration}</li>
            <button onClick={() => handleDeleteCard(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ClientExercises;
