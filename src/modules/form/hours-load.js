import dayjs from "dayjs";
import { openingHours } from "../../utils/opning-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedyules }) {
  hours.innerHTML = "";

  // verifica se o todos horaios estão indisponíveis
  const unavailableHours = dailySchedyules.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm");
  });

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    // adiciona a hora na date e verifica se é antes do horário atual
    const isHourPresent = dayjs(date)
      .add(scheduleHour, "hour")
      .isAfter(dayjs());

    const available = !unavailableHours.includes(hour) && isHourPresent;

    return {
      hour,
      available,
    };
  });

  //  Renderizar os horarios disponíveis
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;
    li.setAttribute("value", hour);

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.appendChild(li);
  });

  // Chama a função de click para os horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const li = document.createElement("li");
  li.classList.add("hour-period");
  li.textContent = title;

  hours.appendChild(li);
}
