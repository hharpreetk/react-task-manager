import { useTheme } from "../contexts/ThemeContext";
import SearchInput from "./SearchInput";

export default function Navbar() {
  // Access theme state from context
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="border-t-2 bg-white px-4 py-3 dark:bg-secondary sm:px-6"
      role="navigation"
    >
      <div className="mx-auto flex flex-nowrap items-center justify-between gap-4">
        <a href="." className="flex items-center" aria-label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 text-secondary dark:text-white"
            alt="Home Icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
        </a>
        <SearchInput />
        <div className="flex">
          <button
            id="theme-toggle"
            type="button"
            className="rounded-lg text-sm text-secondary focus:outline-none focus:ring-0 dark:text-white"
            aria-label={`Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`}
            onClick={toggleTheme}
          >
            <svg
              id="theme-toggle-dark-icon"
              className={`${theme === "dark" ? "hidden" : ""} h-5 w-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              alt="Dark Mode Icon"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className={`${theme === "light" ? "hidden" : ""} h-5 w-5`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              alt="Light Mode Icon"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
