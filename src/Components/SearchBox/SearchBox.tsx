import React, { useState, useEffect, useRef } from "react";
import "./SearchBox.css";

type FilterType = "Name" | "ID" | "Mobile";

interface Props {
  onSearch: (query: string, filter: FilterType) => void;
  suggestions: string[];
  filterOptions?: FilterType[];
}

const SearchBox: React.FC<Props> = ({
  onSearch,
  suggestions,
  filterOptions = ["Name", "ID", "Mobile"],
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [filter, setFilter] = useState<FilterType>("Name");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (query.trim()) onSearch(query, filter);
    }, 300); // debounce time
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [query, filter]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setQuery(suggestions[selectedIndex]);
      onSearch(suggestions[selectedIndex], filter);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    onSearch(text, filter);
    setShowSuggestions(false);
  };

  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder={`Search by ${filter.toLowerCase()}`}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((s, i) => (
            <li
              key={s}
              className={i === selectedIndex ? "active" : ""}
              onClick={() => handleSuggestionClick(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      <select
        className="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterType)}
      >
        {filterOptions.map((opt) => (
          <option key={opt} value={opt}>{`Search by ${opt}`}</option>
        ))}
      </select>
    </div>
  );
};
export default SearchBox;
