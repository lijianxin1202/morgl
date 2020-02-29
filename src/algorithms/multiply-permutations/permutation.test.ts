import { multiply as multiplyA } from './a';
import { multiply as multiplyB, multiplyLToR } from './b';
import { inverse as inverseI } from './i';
import { inverse as inverseJ } from './j';

describe('multiply-permutations', () => {
  test('a', () => {
    expect(multiplyA('(acfg)(bcd)(aed)(fade)(bgfae)')).toBe('(adg)(ceb)(f)');
    expect(multiplyA('(acf)(bd)(abd)(ef)')).toBe('(acefb)(d)');
  });
  test('b', () => {
    expect(multiplyB('(acfg)(bcd)(aed)(fade)(bgfae)')).toBe('(dcegbfa)');
    expect(multiplyLToR('(acfg)(bcd)(aed)(fade)(bgfae)')).toBe('(dcegbfa)');
  });
  test('i', () => {
    expect(inverseI('621543')).toBe('326541');
  });
  test('j', () => {
    expect(inverseJ('621543')).toBe('326541');
  });
});