import React, { useState } from "react";
import { useMouse } from "../MainContext";

const NoteBox = () => {
  const { boxPosition, setMode, notes } = useMouse();
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

  return (
    <div
      className="note-box"
      style={{ position: "absolute", top: boxPosition.y, left: boxPosition.x }}
      onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)}
    >
      <span className="note-box-number" style={{ "--color": colors }}>
        {notes.length + 1}
      </span>
      <span className="upArrow"></span>
      <ul>
        {commentTypes.map((ct) => (
          <div className="comment-container" key={ct.name}>
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
    </div>
  );
};

export default NoteBox;
