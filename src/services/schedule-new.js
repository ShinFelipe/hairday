import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
  console.log("Agendamento recebido:", { id, name, when });

  try {
    const response = await fetch(apiConfig.baseUrl + "/schedules", {
      method: "POST",
      body: JSON.stringify({ id, name, when }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Agendado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Não foi posível agendar tente novamente mais tarde.");
  }
}
