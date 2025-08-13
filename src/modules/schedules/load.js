import { scheduleFetchByDate } from "../../services/schedule-fetch-by-date";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  if (!(selectedDate instanceof HTMLInputElement)) {
    throw new Error("Element with id 'date' is not an input element");
  }

  const date = selectedDate.value;
  console.log("Data selecionada:", date);

  // Busca os agendamentos do dia na API
  const dailySchedyules = await scheduleFetchByDate({ date });

  // exibe os agendamentos
  schedulesShow({ dailySchedyules });
  // Renderiza a hora disponível
  hoursLoad({ date, dailySchedyules });
}
