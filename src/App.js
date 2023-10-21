import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { TasksProvider } from "./TasksContext";

export default function App() {
  return (
    <div
      className="flex h-screen w-full flex-1 flex-col overflow-hidden bg-slate-100 dark:bg-slate-900"
      role="main"
    >
      <TasksProvider>
        <TaskInput />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
