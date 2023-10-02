import React, { useContext, useEffect, useState } from "react";
import Clients from "./Clients";
import "./styles/App.css";
import AddClientModal from "./AddClientModal";
import {useNavigate } from "react-router-dom";
import { AuthContext } from "./authContextApi/AuthContext";

function MainApp() {
  const [clients, setClients] = useState([]);
  const [clientName, setClientName] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const userId = currentUser?._id;

  
  // fetch all clients from the backend
  const fetchClients = async () => {
    // remember fectch return object that has json method
    // so u need to convert json
    //
    const allClients = await fetch("http://localhost:5000/clients",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({userId})
    }).then(
      (reponse) => reponse.json(),
    );
    setClients(allClients);
  }

  useEffect(() => {
    if(!currentUser){
      navigate("/login");
      return;
    };

    setLoading(true);
    fetchClients();
    setLoading(false);
  }, []);


  // create new client
  const handleCreateClient = async (event) => {
    event.preventDefault();

    const input = {
      clientName,
      userId
    }

    // talk to the back-end at /clients
    // get new client and convert from json
    const newClient = await fetch("http://localhost:5000/clients/create", {
      method: "POST",
      body: JSON.stringify({ input }),
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
        <h2>{currentUser?.username}'s Clients</h2>
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
        <div>loading clients...</div>
      ) : (
        <Clients clients={clients} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default MainApp;
