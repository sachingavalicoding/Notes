import { useState } from "react";
// eslint-disable-next-line react/prop-types
const TaskInput = ({addTask}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task ..."
      />
      <button type="submit"> Add </button>
    </form>
  );
};

export default TaskInput;
