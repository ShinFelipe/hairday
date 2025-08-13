import { apiConfig } from "./api-config";

export async function cancelSchedule({ id }) {
  try {
    await fetch(apiConfig.baseUrl + `/schedules/${Number(id)}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    alert("Erro ao cancelar o agendamento. Tente novamente mais tarde.");
    console.error("Error canceling schedule:", error);
    throw error;
  }
}
