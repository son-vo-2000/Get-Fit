import React, { useState } from "react";

function App() {
  const [clients, setClients] = useState("");
  const [clientName, setClientName] = useState("");

  const handleCreateClient = async (event) => {
    event.preventDefault();

    // talk to the back-end at /clients
    await fetch("http://localhost:5000/clients", {
      method: "POST",
      body: JSON.stringify({ clientName }),
      headers: { "Content-Type": "application/json" },
    });

    setClientName("");
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
    </div>
  );
}

export default App;
