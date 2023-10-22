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
          <li
            key={task.id}
            className="border-r-1 mt-2 flex cursor-pointer flex-wrap items-center gap-3 bg-light px-4 shadow-sm hover:bg-gray-50 dark:bg-dark dark:hover:bg-slate-950"
          >
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
