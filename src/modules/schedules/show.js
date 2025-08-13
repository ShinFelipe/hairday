// Seleciona as sessões do dia

import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedyules }) {
  console.log(dailySchedyules);

  try {
    // Limpa as sessões antes de adicionar novos agendamentos
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // renderiza os agendamentos nas sessões correspondentes
    dailySchedyules.forEach((schedule) => {
      console.log(schedule);

      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // adiciona o id do agendamento para possível uso futuro
      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // criar o icone de cancelamento (sem funcionalidade por enquanto)
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // adiciona os elementos ao item da lista
      item.append(time, name, cancelIcon);

      // obtem a hora do agendamento
      const hour = dayjs(schedule.when).hour();

      // renderizar na sessão correta
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.error("Erro ao exibir os agendamentos:", error);
    alert("Erro ao exibir os agendamentos.");
  }
}
