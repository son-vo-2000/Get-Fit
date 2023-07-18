import React from "react";
import { Link } from "react-router-dom";
import "./styles/Clients.css";

function Clients({ clients, handleDelete }) {
  return (
    <ul className="clients-card-container">
      {clients.map((client) => (
        <div className="clients-card" key={client._id}>
          <i class="fa-solid fa-x" onClick={() => handleDelete(client._id)}></i>
          <li className="clients">{client.name}</li>
          <div className="function-buttons">
            <Link className="btn-exercise" to={`clients/${client._id}`}>
              Exercises <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Clients;
