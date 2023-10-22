import Task from "./Task";
import { useTasks } from "./TasksContext";

export default function TaskList() {
  // Access tasks state from context
  const { tasks } = useTasks();

  if (!tasks) return; // Early return if there are no tasks

  // Render a list of tasks
  return (
    <div className="tasks mx-auto w-full max-w-6xl">
      <ul className="mx-5 my-2 flex flex-1 list-none flex-col">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </ul>
    </div>
  );
}
