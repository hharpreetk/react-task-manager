import Task from "./Task";

export default function TaskList({ tasks, toggleDone, deleteTask }) {
    if (!tasks) return;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}><Task task={task} toggleDone={toggleDone} deleteTask={deleteTask} /></li>
        ))}
      </ul>
    );
  }
  