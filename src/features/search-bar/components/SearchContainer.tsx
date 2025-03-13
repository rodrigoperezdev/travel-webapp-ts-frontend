import React, { useState } from "react";
import styles from "../styles/SearchBarContainer.module.scss";
import { SearchBar } from "./SearchBar";
import { SearchSuggestions } from "./SearchSuggestions";

export const SearchContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.container}>
      <SearchBar searchValue={searchValue} onChange={setSearchValue} />
      {searchValue && <SearchSuggestions searchValue={searchValue} />}
    </div>
  );
};
