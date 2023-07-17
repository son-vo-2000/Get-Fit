import React, { useEffect, useState } from "react";
import Clients from "./Clients";

function MainApp() {
  const [clients, setClients] = useState([]);
  const [clientName, setClientName] = useState("");

  // fetch all clients from the backend
  useEffect(() => {
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
  };

  // delete client
  const handleDelete = async (clientId) => {
    await fetch(`http://localhost:5000/clients/${clientId}`, {
      method: "DELETE",
    });

    //update clients UI
    setClients(clients.filter((client) => client._id !== clientId));
  };

  

  return (
    <div className="App" onSubmit={handleCreateClient}>
      <form>
        <label htmlFor="client-name">New Client</label>
        <input
          id="client-name"
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <button>Create</button>
      </form>
      <Clients clients={clients} handleDelete={handleDelete} />
    </div>
  );
}

export default MainApp;
