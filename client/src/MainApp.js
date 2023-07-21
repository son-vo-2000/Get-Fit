import React, { useEffect, useState } from "react";
import Clients from "./Clients";
import "./styles/App.css";
import AddClientModal from "./AddClientModal";

function MainApp() {
  const [clients, setClients] = useState([]);
  const [clientName, setClientName] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // fetch all clients from the backend
  useEffect(() => {
    setLoading(true);
    async function fetchClients() {
      // remember fectch return object that has json method
      // so u need to convert json
      //
      const allClients = await fetch("http://localhost:5000/clients").then(
        (reponse) => reponse.json(),
      );
      setClients(allClients);
    }
    fetchClients();
    setLoading(false);
  }, []);

  // create new client
  const handleCreateClient = async (event) => {
    event.preventDefault();

    // talk to the back-end at /clients
    // get new client and convert from json
    const newClient = await fetch("http://localhost:5000/clients", {
      method: "POST",
      body: JSON.stringify({ clientName }),
      headers: { "Content-Type": "application/json" },
    }).then((reponse) => reponse.json());

    // update UI
    setClients([...clients, newClient]);

    setClientName("");
    toggleModal();
  };

  // delete client
  const handleDelete = async (clientId) => {
    await fetch(`http://localhost:5000/clients/${clientId}`, {
      method: "DELETE",
    });

    //update clients UI
    setClients(clients.filter((client) => client._id !== clientId));
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
  };

  return (
    <div className="App">
      <div className="top-section">
        <h2>My Clients</h2>
        <button onClick={toggleModal}>Add Client</button>
      </div>
      <AddClientModal
        toggleModal={toggleModal}
        clientName={clientName}
        setClientName={setClientName}
        handleCreateClient={handleCreateClient}
        open={modal}
      />
      {loading ? (
        <div>loading...</div>
      ) : (
        <Clients clients={clients} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default MainApp;
