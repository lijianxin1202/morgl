import getWeekDay from './get-week-day';

test('get week day', () => {
  expect(getWeekDay(new Date(2019, 0, 1))).toBe(2);
  expect(getWeekDay(new Date(2019, 1, 3))).toBe(0);
  expect(getWeekDay(new Date(2019, 3, 5))).toBe(5);
  expect(getWeekDay(new Date())).toBe(new Date().getDay());
});
