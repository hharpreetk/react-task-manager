import { useTheme } from "../contexts/ThemeContext";
export default function ThemeSwitcher() {
  // Access theme state from context
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex">
      <button
        type="button"
        className="p-3 text-primary hover:bg-slate-200 dark:text-white dark:hover:bg-indigo-600"
        aria-label={`Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`}
        title="Switch betwen light and dark theme"
        onClick={toggleTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${theme === "dark" ? "hidden" : ""} h-4 w-4`}
          fill="currentColor"
          viewBox="0 0 18 20"
          alt="Dark Mode Icon"
        >
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${theme === "light" ? "hidden" : ""} h-4 w-4`}
          fill="currentColor"
          viewBox="0 0 20 20"
          alt="Light Mode Icon"
        >
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
      </button>
    </div>
  );
}
