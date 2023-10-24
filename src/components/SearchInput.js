import { useSearchQuery } from "../contexts/SearchQueryContext";

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useSearchQuery();

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  return (
    <div className="align-center flex w-full max-w-xl rounded-sm border-2 border-slate-300 px-2.5 dark:border-2 dark:border-transparent dark:bg-primary">
      <input
        type="text"
        id="searchQuery"
        value={searchQuery}
        className="dark:text-fill-white block w-full border-0 p-1.5 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus:ring-0 dark:bg-primary dark:text-white dark:placeholder:text-indigo-100 dark:autofill:shadow-[inset_0_0_0px_1000px_#6366f1] dark:focus:border-0"
        placeholder="Search..."
        aria-label="Search Tasks"
        onChange={handleSearchInput}
        autoFocus
      />
      {searchQuery ? (
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
    </div>
  );
}
