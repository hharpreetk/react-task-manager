import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { TasksProvider } from "./TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <TaskInput />
      <TaskList />
    </TasksProvider>
  );
}
