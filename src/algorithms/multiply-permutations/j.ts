export function inverse(permutation: string) {
  const formula = permutation.split('').map(v => -parseInt(v, 10));
  formula.unshift(0);
  let m = permutation.length;
  let j = 0;
  let i = 0;
  while (m > 0) {
    j = m;
    do {
      i = formula[j];
      if (i > 0) {
        j = i;
      }
    } while (i > 0);
    formula[j] = formula[-i];
    formula[-i] = m;
    m--;
  }
  formula.shift();
  return formula.join('');
}