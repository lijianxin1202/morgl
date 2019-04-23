import bubbleSort from "./bubble-sort";

test("bubble sort", () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort([1])).toEqual([1]);
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(bubbleSort([3, 2, 6, 4, 5, 8, 7, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
