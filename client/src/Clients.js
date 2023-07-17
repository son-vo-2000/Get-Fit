import React from 'react';
import {Link} from 'react-router-dom'

function Clients({ clients, handleDelete }) {
  return (
    <div className="clients">
      <ul className="clients-card-container">
        {clients.map((client) => (
          <div key={client._id}>
            <li className="clients-card">
              <Link to={`clients/${client._id}`} >{client.title}</Link>
            </li>
            <button onClick={() => handleDelete(client._id)}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Clients;