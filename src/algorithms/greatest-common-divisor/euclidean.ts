export default function euclidean(a: number, b: number) {
  let gcd = 0;
  while (b > 0) {
    if (a < b) {
      [a, b] = [b, a];
    }
    const mod = a % b;
    if (mod === 0) {
      gcd = b;
    }
    [a, b] = [b, mod];
  }
  return gcd;
}
