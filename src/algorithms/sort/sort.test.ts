import bubbleSort from './bubble-sort';
import mergeSort from './merge-sort';

describe('sort', () => {
  test('bubble sort', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(bubbleSort([3, 6, 4, 5, 8, 7, 1])).toEqual([1, 3, 4, 5, 6, 7, 8]);
  });

  test('merge sort', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
    expect(mergeSort([3, 2, 6, 4, 5, 7, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
