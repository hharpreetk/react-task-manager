import Task from "./Task";

export default function TaskList({ tasks, modifyTask, deleteTask }) {
  if (!tasks) return;
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
