import { cancelSchedule } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obter a li pai do elemento clicado
      const item = event.target.closest("li");
      // Verificar se o item possui um id
      const { id } = item.dataset;

      if (id) {
        const isConfirmed = confirm(
          "Você tem certeza que deseja cancelar este agendamento?"
        );
        console.log(isConfirmed);

        if (isConfirmed) {
          await cancelSchedule({ id });
          schedulesDay();
        }
      }
    }
  });
});
