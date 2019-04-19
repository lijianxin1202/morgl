import euclidean from "./euclidean";

test("get gcd", () => {
  expect(euclidean(3, 3)).toBe(3);
  expect(euclidean(2, 4)).toBe(2);
  expect(euclidean(8, 9)).toBe(1);
  expect(euclidean(15, 21)).toBe(3);
});
