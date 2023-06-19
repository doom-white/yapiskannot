import React from "react";

const LeaveCommentText = ({ position }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        cursor: "crosshair",
      }}
    >
      Yorum yazmak için tıkla!
    </div>
  );
};

export default LeaveCommentText;
