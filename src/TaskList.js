export default function TaskList({ tasks }) {
    if (!tasks) return;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    );
  }
  