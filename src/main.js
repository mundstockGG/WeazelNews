const currentDate = new Date();

const getMonthName = (monthIndex) => {
  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  return months[monthIndex];
};

const getDayName = (dayIndex) => {
  const days = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIÉRCOLES",
    "JUEVES",
    "VIERNES",
    "SÁBADO",
  ];
  return days[dayIndex];
};

const formattedDate = `${getDayName(
  currentDate.getDay()
)}, ${currentDate.getDate()} ${getMonthName(
  currentDate.getMonth()
)}, ${currentDate.getFullYear()}`;

document.getElementById("class-date").textContent = formattedDate;