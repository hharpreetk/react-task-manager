import Task from "./Task";

export default function TaskList({ tasks, toggleDone }) {
    if (!tasks) return;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}><Task task={task} toggleDone={toggleDone} /></li>
        ))}
      </ul>
    );
  }
  