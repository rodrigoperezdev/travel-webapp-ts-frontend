import React from "react";
import { Calendar } from "./Calendar";
import { Dayjs } from "dayjs";

interface DateInputProps {
  setDate: (value: Dayjs | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ setDate }) => {
  return (
    <div className="search-form__date">
      <div>
        <h3 className="search-form__title">Date</h3>
      </div>
      <div className="search-form__input-container">
        <Calendar label={"Set date"} value={null} setDate={setDate} />
      </div>
    </div>
  );
};
