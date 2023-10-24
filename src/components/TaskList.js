import Task from "./Task";
import { useTasks } from "../contexts/TasksContext";
import { useSearchQuery } from "../contexts/SearchQueryContext";

export default function TaskList() {
  // Access tasks state from context
  const { tasks } = useTasks();
  const { searchQuery } = useSearchQuery();

  if (!tasks) return; // Early return if there are no tasks

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render a list of tasks
  return (
    <div className="tasks mx-auto w-full max-w-6xl">
      <ul
        className="mx-5 my-2 flex flex-1 list-none flex-col"
        aria-label="List of tasks"
      >
        {filteredTasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
