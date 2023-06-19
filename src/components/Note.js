import React from "react";

const Note = ({ note }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: note.position.y,
        left: note.position.x,
        color: note.color,
        background: "black",
      }}
    >
      {note.description}
    </div>
  );
};

export default Note;
