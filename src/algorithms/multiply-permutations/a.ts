export function multiply(permutations: string) {
  const length = permutations.length;
  const formula = permutations.split('');
  const tags: any[] = [];
  let leftParentheseIndex = 0;
  for (let i = 0; i < length; i++) {
    if (formula[i] === '(') {
      tags[i] = true;
      leftParentheseIndex = i;
    } else if (formula[i] === ')') {
      formula[i] = formula[leftParentheseIndex + 1];
      tags[i] = true;
    }
  }
  const result: any[] = [];
  let untaggedIndex = 0;
  let current = '';
  let currentIndex = 0;
  let start = '';
  open();
  // A2
  function open() {
    untaggedIndex = getFirstUntaggedIndex(tags);
    if (untaggedIndex >= 0 && untaggedIndex < tags.length) {
      start = formula[untaggedIndex];
      result.push('(');
      result.push(start);
      tags[untaggedIndex] = true;
      setCurrent(untaggedIndex);
    }
  }
  // A3
  function setCurrent(index: number) {
    current = formula[index + 1];
    currentIndex = index + 1;
    scanFormula();
  }
  // A4
  function scanFormula(start?: number) {
    let index = (start || currentIndex) + 1;
    let same = false;
    while (index < formula.length) {
      if (formula[index] === current) {
        same = true;
        break;
      }
      index++;
    }
    if (same) {
      tags[index] = true;
      setCurrent(index);
    } else {
      judge();
    }
  }
  // A5
  function judge() {
    if (current !== start) {
      result.push(current);
      scanFormula(1);
    } else {
      close();
    }
  }
  // A6
  function close() {
    result.push(')');
    open();
  }
  return result.join('');
}

function getFirstUntaggedIndex(tags: any[]) {
  let i = 0;
  for (i = 0; i < tags.length; i++) {
    if (!tags[i]) {
      break;
    }
  }
  return i;
}