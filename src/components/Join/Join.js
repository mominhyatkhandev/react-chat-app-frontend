import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css"

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerConatiner">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="joinInput"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <input
            className="joinInput mt-20"
            placeholder="Room"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room) && event.preventDefault()}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
