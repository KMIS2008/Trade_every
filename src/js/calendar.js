// Находим все элементы с датой
const calendarElements = document.querySelectorAll('.calendar');

// Начальная дата (например: 1 октября 2025)
let currentDate = new Date(2025, 9, 1); // Месяцы начинаются с 0 (0 = январь, 9 = октябрь)

// Функция обновления даты
function updateCalendar() {
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');

  // Обновляем все элементы с классом .calendar
  calendarElements.forEach(el => {
    el.textContent = `${day}/${month}`;
  });
}

// Обработка нажатия на кнопки
document.querySelectorAll('.arrowLeft').forEach(button => {
  button.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1); // Уменьшаем дату
    updateCalendar();
  });
});

document.querySelectorAll('.arrowRight').forEach(button => {
  button.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1); // Увеличиваем дату
    updateCalendar();
  });
});

// Инициализация при загрузке
updateCalendar();