import React from "react";
import { Calendar } from "./Calendar";
import { Dayjs } from "dayjs";

interface DateInputProps {
  date: Dayjs | null;
  setDate: (value: Dayjs | null) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ date, setDate }) => {
  return (
    <div className="search-form__date">
      <div>
        <h3 className="search-form__title">Date</h3>
      </div>
      <div className="search-form__input-container">
        <Calendar label={"Set date"} date={date} setDate={setDate} />
      </div>
    </div>
  );
};
