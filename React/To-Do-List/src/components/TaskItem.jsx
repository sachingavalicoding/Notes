/* eslint-disable react/prop-types */
const TaskItem = ({task , deleteTask}) => {
  return (
    <li>
        <p>{task.text}</p>
        <button onClick={deleteTask(task.id)}> Delete  </button>
    </li>
  )
}

export default TaskItem