import React from "react";
import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <span>Linkedin / Facebook / Instagram</span>
    </div>
  );
};
