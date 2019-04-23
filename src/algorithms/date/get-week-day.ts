// W = [C/4] - 2C + y + [y/4] + [13 * (M+1) / 5] + d - 1
export default function getWeekday(date: Date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  const day = date.getDate();
  month++;
  if (month === 1 || month === 2) {
    month += 12;
    year--;
  }
  const c = Math.floor(year / 100);
  year = year % 100;
  const days =
    Math.floor(c / 4) -
    2 * c +
    year +
    Math.floor(year / 4) +
    Math.floor((13 * (month + 1)) / 5) +
    day -
    1;
  return days % 7;
}
