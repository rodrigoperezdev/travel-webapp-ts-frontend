import React, { memo } from "react";

import styles from "../styles/SearchSuggestions.module.scss";
import { useSearchSuggestions } from "../hooks/useSearchSuggestions";

interface SearchSuggestionsProps {
  searchValue: string;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = memo(
  ({ searchValue }) => {
    const { getFilteredSuggestions, isLoading } = useSearchSuggestions();
    const filteredSuggestions = getFilteredSuggestions(searchValue);

    const highlightMatch = (name: string) => {
      if (!searchValue) return name;

      const matchIndex = name.indexOf(searchValue.toLowerCase());
      if (matchIndex === -1) return name;

      return (
        <>
          {name.substring(0, matchIndex)}
          <strong>
            {name.substring(matchIndex, matchIndex + searchValue.length)}
          </strong>
          {name.substring(matchIndex + searchValue.length)}
        </>
      );
    };

    return (
      <>
        {!isLoading && searchValue && filteredSuggestions.length > 0 && (
          <div className={styles.container}>
            <ul>
              {filteredSuggestions.map((search: string) => (
                <li className={styles.listElement} key={search}>
                  {highlightMatch(search)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
);
