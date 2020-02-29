export function inverse(permutation: string) {
  const formula = permutation.split('').map(v => parseInt(v, 10));
  formula.unshift(0);
  let m = permutation.length;
  let j = -1;
  let i = 0;
  while (m > 0) {
    i = formula[m];
    if (i < 0) {
      formula[m] = -i;
    } else {
      do {
        invert();
      } while (i > 0);
      i = j;
      formula[m] = -i;
    }
    m--;
  }
  function invert() {
    formula[m] = j;
    j = -m;
    m = i;
    i = formula[m];
  }
  formula.shift();
  return formula.join('');
}