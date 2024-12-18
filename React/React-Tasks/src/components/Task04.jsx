import { useState } from "react";

const Task04 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <div className="container center">
      <h2 className="heading">Task 4 </h2>
      <div
        onMouseMove={handleMouseMove}
        style={{ width: "30rem", height: "25rem", border: "1px solid black" }}
      ></div>
      <p>
        {" "}
        X : {position.x} Y : {position.y}
      </p>
    </div>
  );
};

export default Task04;
