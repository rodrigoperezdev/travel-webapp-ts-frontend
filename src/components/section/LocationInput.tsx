import React, { ChangeEvent } from "react";

import { useForm } from "../../hooks/useForm";
import { PinIcon } from "../graphics/PinIcon";

interface LocationInputProps {
  location: string;
  setLocation: (value: string) => void;
}

export const LocationInput: React.FC<LocationInputProps> = ({
  setLocation,
}) => {
  const { onInputChange, location } = useForm({ location: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    setLocation(location);
  };

  return (
    <div className="search-form__location">
      <div>
        <h3 className="search-form__title">Location</h3>
      </div>
      <div className="search-form__input-container">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter your destination"
          name="location"
          onChange={handleInputChange}
          value={location}
        />
        <PinIcon />
      </div>
    </div>
  );
};
