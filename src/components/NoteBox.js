import React from "react";
import { useMouse } from "../MainContext";

const NoteBox = () => {
  const { boxPosition } = useMouse();
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

  return (
    <div
      className="note-box"
      style={{ position: "absolute", top: boxPosition.y, left: boxPosition.x }}
    >
      <ul>
        {commentTypes.map((ct) => (
          <div className="comment-container" key={ct.name}>
            <div
              className="comment-color"
              style={{ "--color": ct.color }}
            ></div>
            <li>{ct.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NoteBox;
