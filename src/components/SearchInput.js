import { useState } from "react";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setSearchInput("");
  };

  return (
    <form
      onSubmit={handleSearchInput}
      className="align-center flex w-full max-w-xl border-2 border-slate-300 px-2.5 dark:border-0 dark:bg-primary"
    >
      <input
        type="text"
        id="search-navbar"
        value={searchInput}
        className="block w-full rounded-sm border-0 p-1.5 focus:ring-0 dark:bg-primary dark:text-white dark:placeholder:text-indigo-100 dark:focus:border-0"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput ? (
        <button
          type="reset"
          title="Clear"
          className="text-icon dark:text-white"
          onClick={handleReset}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </form>
  );
}
