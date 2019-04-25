import Queue from './queue';

test('queue', () => {
  const s = new Queue<number>();
  expect(s.isEmpty()).toBe(true);
  s.enQueue(3);
  expect(s.deQueue()).toBe(3);
  expect(s.isEmpty()).toBe(true);
  expect(s.deQueue).toThrow();
  expect(new Queue([2, 1, 3]).toString()).toBe('2,1,3');
});
