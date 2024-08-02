import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem sx={{ width: "100%" }}>
        <DateCalendar
          fixedWeekNumber={6}
          showDaysOutsideCurrentMonth
          sx={{ width: "100%" }}
          views={["day"]}
        />
      </DemoItem>
    </LocalizationProvider>
  );
}
