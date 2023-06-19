import React, { useState } from "react";
import Draggable from "react-draggable";

const Note = ({ note }) => {
  const [noteVisible, setNoteVisible] = useState(false);

  const showNotes = () => {
    setNoteVisible(!noteVisible);
  };

  return (
    <Draggable defaultPosition={{ x: note.position.x, y: note.position.y }}>
      <div
        className="note-main"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        key={note.number}
      >
        <span
          className="note-box-number"
          style={{ "--color": note.color, cursor: "pointer" }}
          onDoubleClick={showNotes}
        >
          {note.number}
        </span>
        {noteVisible && <div className="note-desc">{note.description}</div>}
      </div>
    </Draggable>
  );
};

export default Note;
