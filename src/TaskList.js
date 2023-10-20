import Task from "./Task";

export default function TaskList({ tasks, modifyTask, deleteTask }) {
  // Render a list of tasks 
  if (!tasks) return; // Early return if there are no tasks
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} modifyTask={modifyTask} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
}
