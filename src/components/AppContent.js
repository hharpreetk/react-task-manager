import { useTheme } from "../contexts/ThemeContext";
import { TasksProvider } from "../contexts/TasksContext";
import SearchQueryProvider from "../contexts/SearchQueryContext";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function AppContent() {
  // Access theme state from context
  const { theme } = useTheme();

  return (
    <SearchQueryProvider>
      <div
        className={`app flex h-screen flex-col overflow-auto ${theme}`}
        role="application"
      >
        <header role="banner">
          <Navbar />
        </header>
        <main
          className="flex w-full flex-1 flex-col overflow-auto bg-slate-100 dark:bg-slate-900"
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
    </SearchQueryProvider>
  );
}
