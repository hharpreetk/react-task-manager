import Task from "./Task";
import { useTasks } from "./TasksContext";

export default function TaskList() {
  // Access tasks state from context
  const {tasks} = useTasks();

  if (!tasks) return; // Early return if there are no tasks

  // Render a list of tasks
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
