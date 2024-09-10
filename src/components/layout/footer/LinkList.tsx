import React from "react";
import styles from "./Footer.module.scss";

interface LinkListProps {
  title: string;
  items: string[];
}

export const LinkList: React.FC<LinkListProps> = ({ title, items }) => {
  return (
    <div className={styles.footer__linksWrapper}>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
