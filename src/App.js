import React, { useEffect, useRef } from "react";
import masa from "./assets/img/web-sitesi-acmak-ve-tasarlamak.jpg";
import LeaveCommentText from "./components/LeaveCommentText";
import { useMouse } from "./MainContext";
import Note from "./components/Note";
import NoteBox from "./components/NoteBox";

const App = () => {
  const {
    mode,
    setMode,
    position,
    setPosition,
    notes,
    setBoxPosition,
    setBoxVisible,
    boxVisible,
  } = useMouse();
  const screen = useRef();

  useEffect(() => {
    screen.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      setMode(!mode);
      setBoxVisible(false);
    }
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({
        x: position.x,
        y: position.y,
      });
      setBoxVisible(true);
    }
  };

  return (
    <div
      ref={screen}
      tabIndex={0}
      className={`screen ${mode && "editable"}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onKeyUp={handleKeyUp}
    >
      {mode && <LeaveCommentText />}
      <img className="masa" src={masa} alt="masa" />
      {notes && notes?.map((note) => <Note note={note} key={note.number} />)}
      {boxVisible && <NoteBox />}
    </div>
  );
};

export default App;
