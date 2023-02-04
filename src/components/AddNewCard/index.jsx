import React from "react";
import "./addCard.css";
function AddNewCard({ addNewTask }) {
  return (
    <div className="newcard" onClick={addNewTask}>
      AddNewCard +
    </div>
  );
}

export default AddNewCard;
