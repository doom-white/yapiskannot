import React, { useState } from "react";

const Note = ({ note }) => {
  const [noteVisible, setNoteVisible] = useState(false);

  const showNotes = () => {
    setNoteVisible(!noteVisible);
  };

  return (
    <>
      <div
        className="note-main"
        style={{
          position: "absolute",
          top: note.position.y,
          left: note.position.x,
        }}
        key={note.number}
      >
        <span
          className="note-box-number"
          style={{ "--color": note.color, cursor: "pointer" }}
          onClick={showNotes}
        >
          {note.number}
        </span>
        {noteVisible && <div className="note-desc">{note.description}</div>}
      </div>
    </>
  );
};

export default Note;
