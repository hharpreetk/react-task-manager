import { createContext, useContext, useState } from "react";

const SearchQueryContext = createContext();

export default function SearchQueryProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
}

export function useSearchQuery() {
  return useContext(SearchQueryContext);
}