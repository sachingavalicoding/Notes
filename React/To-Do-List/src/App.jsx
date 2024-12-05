import {  useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Sachin",
    },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text: text }]);
    console.log("Task Add ");
  };

  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("task delete");
    console.log(tasks);
  };
  return (
    <div className="todo__container">
      <h1> To Do List </h1>
      <main className="todo__content">
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </main>
    </div>
  );
};

export default App;
