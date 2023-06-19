import React from "react";
import { useMouse } from "../MainContext";

const LeaveCommentText = () => {
  const { position } = useMouse();

  return (
    <div
      className="leave-comment-text"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
      }}
    >
      Yorum yazmak için tıkla!
    </div>
  );
};

export default LeaveCommentText;
