import Navbar from "./Navbar";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import { TasksProvider } from "./TasksContext";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div
        className="flex h-screen w-full flex-1 flex-col overflow-hidden bg-slate-100 dark:bg-slate-900"
        role="main"
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <TasksProvider>
          <TaskInput />
          <TaskList />
        </TasksProvider>
      </div>
    </div>
  );
}
