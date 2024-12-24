import { useState } from "react";

const Task05 = () => {
  const [position, setPosition] = useState({ top: 40, left: 40 });

  const handlePosition = () => {
    setPosition({
      top: Math.random() * 500,
      left: Math.random() * 60,
    });
  };
  return (
    <div className="container center" style={{ position: "relative" }}>
      <h2 className="heading">Task 5 </h2>
      <div
        onMouseOver={handlePosition}
        className="responsive__container"
        style={{ height: "33rem", border: "1px solid black" , position: "relative"  }}
      >
        <button
          style={{
            position: "absolute",
            left: `${position.left}px`,
            top:`${position.top}px`,
            transition:"all 0.4s ease-in"
          }}
        >
          {" "}
          Catch me if you can!{" "}
        </button>
      </div>
    </div>
  );
};

export default Task05;
