import Task from "./Task";

export default function TaskList({ tasks }) {
    if (!tasks) return;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}><Task task={task} /></li>
        ))}
      </ul>
    );
  }
  