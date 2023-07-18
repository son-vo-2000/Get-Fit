import React from "react";

function AddClientModal({toggleModal, clientName, setClientName, open}) {
    
  if (!open) return null;
  return (
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
  );
}

export default AddClientModal;
