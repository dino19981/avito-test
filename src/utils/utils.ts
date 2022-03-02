export function getTime(date: number) {
  const newDate = new Date(new Date(date).getTime() * 1000.0);
  const minutes =
    newDate.getMinutes().toString().length === 1
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();
  const hours =
    newDate.getHours().toString().length === 1 ? `0${newDate.getHours()}` : newDate.getHours();
  return `${hours}:${minutes}, `
}

export function getDate(date: number) {
  const newDate = new Date(new Date(date).getTime() * 1000.0);
  const day =
    newDate.getDate().toString().length === 1 ? `0${newDate.getDate()}` : newDate.getDate();

  const mounth =
    newDate.getMonth().toString().length === 1 ? `0${newDate.getMonth()}` : newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day}.${mounth}.${year}`;
}