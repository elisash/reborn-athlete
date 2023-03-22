import React from "react";
export default function Background({}) {
  return (
    <div className="bg">
      <div className="background">
        <img
          className="background-img"
          src="https://media1.giphy.com/media/EmkBfdGYTCwmXMnf3A/giphy.gif"
          alt="background-image"
        />
      </div>
      <div className="background-text">
        <h1 className="background-words">Unlock</h1>
        <h1 className="background-words">New Skills...</h1>
        <h1 className="background-words">New Possibilities...</h1>
      </div>
    </div>
  );
}
