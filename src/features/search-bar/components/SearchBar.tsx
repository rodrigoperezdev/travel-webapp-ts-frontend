import React from "react";
import styles from "../styles/SearchBar.module.scss";
import searchIcon from "../../../assets/images/header/search.svg";

interface SearchBarProps {
  searchValue: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  onChange,
}) => {
  return (
    <>
      <img src={searchIcon} alt="Search" className={styles.icon} />
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        name="searchValue"
        value={searchValue}
        className={styles.input}
        placeholder="Search"
        aria-label="Search destinations and activities"
      />
    </>
  );
};
