import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

if (!(selectedDate instanceof HTMLInputElement)) {
  throw new Error("Element with id 'date' is not an input element");
}

const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = currentDate;
selectedDate.min = currentDate;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();
    const hourSelected = document.querySelector(".hour-selected");
    console.log("Selected hour:", hourSelected);

    if (!name) {
      alert("Por favor, preencha o nome.");
      return;
    }

    if (!hourSelected) {
      alert("Por favor, selecione um horário.");
      return;
    }

    const [hour] = hourSelected.innerHTML.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();

    // Cadastrar o agendamento no sistema
    await scheduleNew({ id, name, when: when });

    // Recarregar os agendamentos do dia
    await schedulesDay();
    clientName.value = "";
  } catch (error) {
    alert(
      "Não foi possível enviar o formulário. Por favor, tente novamente mais tarde."
    );
    console.error("An error occurred during form submission:", error);
  }
});
