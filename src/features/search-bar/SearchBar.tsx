import React from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/images/header/search.svg";

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={searchIcon} alt="Search" className={styles.icon} />
      <input
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder=""
      />
    </div>
  );
};
