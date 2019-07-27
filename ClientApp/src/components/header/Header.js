import React from "react";

export const Header = ({ leftActions, rightActions, title }) => {
  return (
    <div
      style={{
        height: "45px",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        backgroundColor: "lightsteelblue"
      }}
    >
      {leftActions}
      <span style={{ flexGrow: 1 }}>{title}</span>
      {rightActions}
    </div>
  );
};
