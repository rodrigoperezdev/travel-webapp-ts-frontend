import React from "react";
import styles from "./DestinationGrid.module.scss";
import { RatingBadge } from "../common/RatingBadge";

interface DestinationCardProps {
  img_url: string;
  rating: number;
  title: string;
  location: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  img_url,
  rating,
  title,
  location,
}) => {
  return (
    <div
      className={styles.destinationItem}
      style={{
        borderRadius: "2rem",
        backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.30) 0%,
              rgba(0, 0, 0, 0.22) 100%
            ), url(${img_url})`,
      }}
    >
      <div className={styles.destinationGrid__cardContent}>
        <RatingBadge>{rating}</RatingBadge>
        <div>
          <h4 className={styles.destinationGrid__title}>{title}</h4>
          <p className={styles.destinationGrid__subtitle}>{location}</p>
        </div>
      </div>
    </div>
  );
};
