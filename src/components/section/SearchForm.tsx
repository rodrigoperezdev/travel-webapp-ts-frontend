import React, { useState } from "react";
import { SearchIcon } from "../graphics/SearchIcon";
import { LocationInput } from "./LocationInput";
import { ActivityInput } from "./ActivityInput";
import { DateInput } from "./DateInput";
import { Dayjs } from "dayjs";

export const SearchForm: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__inputs">
          <LocationInput location={location} setLocation={setLocation} />
          <ActivityInput activity={activity} setActivity={setActivity} />
          <DateInput setDate={setDate} />
        </div>
        <div className="search-form__search-button">
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
