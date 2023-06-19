import React, { useState } from "react";
import { useMouse } from "../MainContext";

const NoteBox = () => {
  const { boxPosition, setMode, notes, setNotes, setBoxVisible } = useMouse();
  const [note, setNote] = useState("");
  const commentTypes = [
    {
      name: "comment",
      color: "crimson",
      text: "Comment",
    },
    {
      name: "private-comment",
      color: "#999",
      text: "Private Comment",
    },
    {
      name: "note",
      color: "orange",
      text: "Note",
    },
  ];
  const [colors, setColors] = useState(commentTypes[0].color);

  const changeColor = (color) => {
    setColors(color);
  };

  const addNote = () => {
    const currentNote = {
      number: notes.length + 1,
      description: note,
      color: colors,
      position: {
        x: boxPosition.x,
        y: boxPosition.y,
      },
    };
    setNotes([...notes, currentNote]);
    setBoxVisible(false);
  };

  return (
    <div
      className="note-box"
      style={{ position: "absolute", top: boxPosition.y, left: boxPosition.x }}
      onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)}
    >
      <>
        <span className="note-box-number" style={{ "--color": colors }}>
          {notes.length}
        </span>
        <span className="upArrow"></span>
        <ul>
          {commentTypes.map((ct) => (
            <div className="comment-container">
              <div
                className="comment-color"
                style={{ "--color": ct.color }}
              ></div>
              <li
                onClick={() => changeColor(ct.color)}
                style={{ "--color": ct.color }}
              >
                {ct.text}
              </li>
            </div>
          ))}
        </ul>
      </>
      <>
        <div className="note-textarea">
          <textarea
            name="setnote"
            id="setnote"
            cols="20"
            rows="7"
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button
            disabled={!note}
            style={{ "--color": colors }}
            className="note-save-btn"
            onClick={addNote}
          >
            Kaydet
          </button>
        </div>
      </>
    </div>
  );
};

export default NoteBox;
