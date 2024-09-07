import styles from "./DestinationGrid.module.scss";
import { topDestinations } from "../../assets/js/topDestinations";
import { DestinationCard } from "./DestinationCard";

export const DestinationGrid = () => {
  return (
    <div className={styles.destinationGrid}>
      {topDestinations.map((place) => (
        <DestinationCard
          key={place.id}
          img_url={place.img_url}
          rating={place.rating}
          title={place.title}
          location={place.location}
        />
      ))}
    </div>
  );
};
