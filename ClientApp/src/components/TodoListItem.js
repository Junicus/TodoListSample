import React from "react";

export const TodoListItem = ({ completed, text, onEdit }) => {
  return (
    <div style={{ display: "flex", margin: "10px", alignItems: "center" }}>
      <label style={{ flexGrow: 1 }}>
        <input type="checkbox" checked={completed} />
        {text}
      </label>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button>Del</button>
      </div>
    </div>
  );
};
