import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDate({ date }) {
  try {
    const response = await fetch(apiConfig.baseUrl + "/schedules");

    const data = await response.json();

    // filtra os agendamentos pela data
    const dailySchedyules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });

    return dailySchedyules;
  } catch (error) {
    console.error("Failed to fetch schedules by date:", error);
    alert(
      "Não foi possível buscar os agendamentos. Por favor, tente novamente mais tarde."
    );
    throw error;
  }
}
