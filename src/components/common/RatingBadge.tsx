import React from "react";
import styles from "./RatingBadge.module.scss";

interface RatingBadgeProps {
  children: React.ReactNode;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ children }) => {
  return (
    <div className={styles.rating}>
      <span>{children}</span>
    </div>
  );
};
