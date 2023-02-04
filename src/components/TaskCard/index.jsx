import React, { useEffect, useState } from "react";
import "./card.css";

const statusOptions = ["todo", "inprogress", "done"];

function TaskCard({ data, updateTask, handleClose, focus }) {
  const { value = "", id = "", status = "todo" } = data || {};

  const handleOnChange = (event) => {
    const { name: inputKey, value: inputValue } = event.target;

    if (
      (inputKey === "status" && status !== inputValue) ||
      (inputKey === "value" && value !== inputValue)
    ) {
      updateTask({
        id,
        data: { ...data, [inputKey]: inputValue },
      });
    }
  };

  const _handleClose = () => {
    handleClose(id);
  };

  return (
    <div className="card">
      <div>
        <textarea
          defaultValue={value}
          onBlur={handleOnChange}
          autoFocus={focus}
          name="value"
        />
      </div>
      <div className="child">
        <div className="close__icon" onClick={_handleClose}>
          X
        </div>
        <select
          className="dropdown"
          defaultValue={status}
          onChange={handleOnChange}
          name="status"
        >
          {statusOptions.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TaskCard;
