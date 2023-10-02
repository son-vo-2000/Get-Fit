import React from "react";
import "./styles/Modal.css";

function AddClientModal({
  clientName,
  setClientName,
  open,
  handleCreateClient,
  toggleModal,
}) {
  if (!open) return null;
  return (
    <div className="modal-background">
      <form onSubmit={handleCreateClient} className="modal-container">
        <div className="form-top-section">
          <i className="fa-solid fa-x" onClick={toggleModal}/>
        </div>
        <div className="form-body-section">
          <div className="input-container">
            <label htmlFor="client-name">New Client:</label>
            <input
              id="client-name"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}

export default AddClientModal;
