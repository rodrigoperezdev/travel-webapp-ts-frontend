import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface CalendarProps {
  label: string;
  date: Dayjs | null;
  setDate: (value: Dayjs | null) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ label, date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} value={date} onChange={setDate} />
    </LocalizationProvider>
  );
};
