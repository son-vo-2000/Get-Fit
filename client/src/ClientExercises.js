import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddExerciseModal from "./AddExerciseModal";
import "./styles/Exercises.css";
import EditExerciseModal from "./EditExerciseModal";
import { Link } from "react-router-dom";

function ClientExercises() {
  const [exerciseName, setExcerciseName] = useState("");
  const [duration, setDuration] = useState("");
  const [completed, setCompleted] = useState(false);
  const [cards, setCards] = useState([]);
  const [client, setClient] = useState("");
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { clientId } = useParams();
  const [editIndex, setEditIndex] = useState("");

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
    toggleModal();
  };

  // delete card
  const handleDeleteCard = async (index) => {
    if (!clientId) return;
    const updatedCards = await fetch(
      `http://localhost:5000/clients/${clientId}/exercises/${index}`,
      {
        method: "DELETE",
      },
    ).then((reponse) => reponse.json());

    //update cards UI
    setCards(updatedCards.exercises);
  };

  //Edit card
  const handleEditCard = async (event) => {
    event.preventDefault();
    if (!clientId) return;

    const updatedCards = await fetch(
      `http://localhost:5000/clients/${clientId}/exercises/${editIndex}`,
      {
        method: "POST",
        body: JSON.stringify({ exerciseName, duration }),
        headers: { "Content-Type": "application/json" },
      },
    ).then((reponse) => reponse.json());

    //update cards UI

    setCards(updatedCards.exercises);
    setExcerciseName("");
    setDuration("");
    toggleEditModal();
  };

  const toggleModal = () => {
    setModal(!modal);
    if (modal !== true) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }

    setDuration("");
    setExcerciseName("");
  };
  const toggleEditModal = (index) => {
    setEditModal(!editModal);
    if (editModal !== true) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      window.onscroll = function () {};
    }

    setEditIndex(index);
    setDuration("");
    setExcerciseName("");
  };

  return (
    <div className="App">
      <AddExerciseModal
        exerciseName={exerciseName}
        setExcerciseName={setExcerciseName}
        duration={duration}
        setDuration={setDuration}
        toggleModal={toggleModal}
        handleCreateExercise={handleCreateExercise}
        open={modal}
      />
      <EditExerciseModal
        exerciseName={exerciseName}
        setExcerciseName={setExcerciseName}
        duration={duration}
        setDuration={setDuration}
        toggleEditModal={toggleEditModal}
        open={editModal}
        handleEditCard={handleEditCard}
        index={editIndex}
      />
      <section className="exercise-top-section">
        <Link to='/main'>
          <i class="fa-solid fa-chevron-left"></i>
        </Link>
        <div>
          <h1>{client.name}</h1>
        </div>
        <button onClick={toggleModal}>Create Exercise</button>
      </section>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Description</th>
            <th>Duration(in minutes)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, index) => (
            <tr key={index}>
              <td>{card.name}</td>
              <td>{card.duration}</td>
              <td className="exercise__btns">
                <button onClick={() => handleDeleteCard(index)}>Delete</button>
                <button onClick={() => toggleEditModal(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientExercises;
