export function multiply(permutations: string) {
  const sortedElements = getSortedElements(permutations);
  const auxiliaryList = [];
  for (let i = 0; i < sortedElements.length; i++) {
    auxiliaryList.push(i + 1);
  }
  let currentUnknownCharIndex = 0;
  let currentUnknownIndex = 0;
  let currentSwitchIndex = 0;
  let index = permutations.length - 1;
  while (index >= 0) {
    const current = permutations[index];
    if (current === ')') {
      currentUnknownCharIndex = 0;
    } else if (current === '(') {
      auxiliaryList[currentUnknownIndex] = currentUnknownCharIndex;
    } else {
      currentSwitchIndex = sortedElements.indexOf(current);
      [auxiliaryList[currentSwitchIndex], currentUnknownCharIndex] = [currentUnknownCharIndex, auxiliaryList[currentSwitchIndex]];
      if (auxiliaryList[currentSwitchIndex] === 0) {
        currentUnknownIndex = currentSwitchIndex;
      }
    }
    index--;
  }
  return `(${auxiliaryList.map(i => sortedElements[i - 1]).join('')})`;
}

function getSortedElements(permutations: string) {
  const elements = permutations
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .split('')
    .filter((value, index, arr) => arr.indexOf(value) === index)
    .sort()
    .join('');
  const sortedElements = elements.split('').sort().join('');
  return sortedElements;
}

export function multiplyLToR(permutations: string) {
  const sortedElements = getSortedElements(permutations);
  const auxiliaryList = [];
  for (let i = 0; i < sortedElements.length; i++) {
    auxiliaryList.push(i + 1);
  }
  let firstUnknownChar = '';
  let index = 0;
  while (index < permutations.length) {
    const current = permutations[index];
    if (current === '(') {
      firstUnknownChar = '';
    } else if (current === ')') {
      auxiliaryList[auxiliaryList.indexOf(0)] = sortedElements.indexOf(firstUnknownChar) + 1;
    } else {
      if (!firstUnknownChar) {
        firstUnknownChar = current;
      }
      const currentCharIndex = sortedElements.indexOf(current) + 1;
      const currentSwitchIndex = auxiliaryList.indexOf(currentCharIndex);
      auxiliaryList[auxiliaryList.indexOf(0)] = currentCharIndex;
      auxiliaryList[currentSwitchIndex] = 0;
    }
    index++;
  }
  return `(${auxiliaryList.map(i => sortedElements[i - 1]).join('')})`;
}