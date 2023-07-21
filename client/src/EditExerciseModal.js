import React from "react";

function EditExerciseModal(props) {
  const {
    exerciseName,
    setExcerciseName,
    duration,
    setDuration,
    open,
    toggleEditModal,
    handleEditCard,
    index,
  } = props;
  if (!open) return null;

  return (
    <div className="modal-background">
      <form className="modal-container">
        <div className="form-top-section">
          <i className="fa-solid fa-x" onClick={toggleEditModal}></i>
        </div>
        <div className="form-body-section">
          <div className="input-container">
            <label htmlFor="exercise-name">New Exercise</label>
            <input
              id="exercise-name"
              type="text"
              value={exerciseName}
              onChange={(e) => setExcerciseName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <button onClick={handleEditCard}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default EditExerciseModal;
