import React, { useEffect, useRef, useState } from "react";
import masa from "./assets/img/web-sitesi-acmak-ve-tasarlamak.jpg";
import LeaveCommentText from "./components/LeaveCommentText";

const App = () => {
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const screen = useRef();

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
    }
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  useEffect(() => {
    screen.current.focus();
  }, []);

  return (
    <div
      ref={screen}
      tabIndex={0}
      className="screen"
      onMouseMove={handleMouseMove}
      onKeyUp={handleKeyUp}
    >
      {mode && <div>Yorum modu aktif!</div>}
      <LeaveCommentText position={position} />
      <img className="masa" src={masa} alt="masa" />
    </div>
  );
};

export default App;
