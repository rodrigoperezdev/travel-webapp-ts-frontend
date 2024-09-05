import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

interface CalendarProps {
  label: string;
  value: Dayjs | null;
  setDate: (value: Dayjs | null) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  label,
  value,
  setDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} value={value} onChange={setDate} />
    </LocalizationProvider>
  );
};
