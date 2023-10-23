import { useTheme } from "../contexts/ThemeContext";
import Navbar from "./Navbar";
import { TasksProvider } from "../contexts/TasksContext";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function AppContent() {
  // Access theme state from context
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className={`app ${darkMode ? "dark" : ""}`} role="application">
      <header role="banner">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main
        className="flex h-screen w-full flex-1 flex-col overflow-hidden bg-slate-100 dark:bg-slate-900"
        role="main"
      >
        <TasksProvider>
          <TaskInput />
          <section>
            <TaskList />
          </section>
        </TasksProvider>
      </main>
    </div>
  );
}
