function merge(arr1: Array<number>, arr2: Array<number>) {
  let arr = [];
  let count = arr1.length + arr2.length;
  let c = 0;
  let i = 0;
  let j = 0;
  arr1.push(Number.MAX_VALUE);
  arr2.push(Number.MAX_VALUE);
  while (c < count) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
    c++;
  }
  return arr;
}

export default function mergeSort(arr: Array<number>) {
  let sortCount = 2;
  while (arr.length / sortCount > 0.5) {
    for (let i = 0; i < arr.length; i += sortCount) {
      const left = arr.slice(i, i + sortCount / 2);
      const right = arr.slice(i + sortCount / 2, i + sortCount);
      const sorted = merge(left, right);
      arr.splice(i, sortCount, ...sorted);
    }
    sortCount *= 2;
  }
  return arr;
}
