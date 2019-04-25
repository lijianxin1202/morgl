import Stack from './stack';

test('stack', () => {
  const s = new Stack<number>();
  expect(s.isEmpty()).toBe(true);
  s.push(3);
  expect(s.peek()).toBe(3);
  expect(s.pop()).toBe(3);
  expect(s.pop).toThrow();
  expect(new Stack([2, 1, 3]).toString()).toBe('2,1,3');
});
