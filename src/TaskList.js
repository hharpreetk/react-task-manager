import Task from "./Task";

export default function TaskList({
  tasks,
  toggleDone,
  deleteTask,
  changeTask,
}) {
  if (!tasks) return;
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} toggleDone={toggleDone} deleteTask={deleteTask} changeTask={changeTask}/>
        </li>
      ))}
    </ul>
  );
}
