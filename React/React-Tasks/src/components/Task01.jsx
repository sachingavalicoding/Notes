import { useState } from "react";
import CodeButton from "../CodeButton";

{
  /*
            1. Double Click to Reveal Secret

            Create a component that hides a secret message.

            On a double-click event (onDoubleClick), reveal the message: “Shh! I’m a React developer undercover!”

        */
}
const Task01 = () => {
  const [textShow, setTextShow] = useState(false);

  const handleClick = () => {
    if(textShow){
        setTextShow(false);
    }
    else{
        setTextShow(true);
    }
  }
  return (
    <div className="container center">
      <h2 className="heading"> Task 1 <CodeButton link={"https://google.com"} /> </h2>
      {
        textShow ? (<h2>Shh! I’m a React developer undercover!</h2>) : " "
      }
      <button onDoubleClick={handleClick}> Double Click me </button>
    </div>
  );
};

export default Task01;
