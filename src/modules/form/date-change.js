import { schedulesDay } from "../schedules/load";

const selectedDate = document.getElementById("date");

selectedDate.addEventListener("change", () => {
  schedulesDay();
});
