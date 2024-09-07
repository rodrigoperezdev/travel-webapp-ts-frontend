import { DestinationGrid } from "./DestinationGrid";

export const TopDestinations = () => {
  return (
    <section>
      <div className="section-title">
        <div className="section-title__upper">
          <div className="section-title__title">
            <h2>Top destinations</h2>
            <p>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
          </div>
        </div>
      </div>
      <DestinationGrid />
    </section>
  );
};
