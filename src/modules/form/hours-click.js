export function hoursClick() {
  const hoursList = document.querySelectorAll(".hour-available");
  hoursList.forEach((available) => {
    available.addEventListener("click", (event) => {
      // remove a classe de selecionado de todos os horários
      hoursList.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // adiciona a classe de selecionado ao horário clicado
      event.target.classList.add("hour-selected");
    });
  });
}
