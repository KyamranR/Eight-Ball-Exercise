import React, { useState } from "react";

function EightBall({ answers }) {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "white",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      <p>{message}</p>
    </div>
  );
}

export default EightBall;
