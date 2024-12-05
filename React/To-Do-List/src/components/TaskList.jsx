/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem"
const TaskList = ({tasks , deleteTask}) => {
  return (
    <ul className="tasklist__container">
       {
        tasks.map((task ) => (
            <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
       }
    </ul>
  )
}

export default TaskList
