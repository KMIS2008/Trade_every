
const calendarElements = document.querySelectorAll('.calendar');

let currentDate = new Date(2025, 9, 1); 

function updateCalendar() {
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');

  calendarElements.forEach(el => {
    el.textContent = `${day}/${month}`;
  });
}

document.querySelectorAll('.arrowLeft').forEach(button => {
  button.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateCalendar();
  });
});

document.querySelectorAll('.arrowRight').forEach(button => {
  button.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateCalendar();
  });
});


updateCalendar();