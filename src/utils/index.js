export const getWeekday = (stringDate) => {
  const weekday = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  const dateOnly = stringDate.substr(0, 10);
  const date = new Date(dateOnly);

  return weekday[date.getDay()];
}

export const getDateFull = (stringDate) => {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const dateOnly = stringDate.substr(0, 10);
  const date = new Date(dateOnly);

  const day = date.getDate();
  const month = date.getMonth();
  const monthText = months[month];

  return `${day + 1} de ${monthText}`;
}

export const formatNumber = (number) => {
  return number.toString().replace('.', ',');
}