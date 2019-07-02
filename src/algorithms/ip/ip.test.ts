import { sortIp, compareIp, getIpRange, isSameNetwork } from './ip';

describe('ip test', () => {
  test('sort ip', () => {
    expect(sortIp(['1.1.1.1', '1.1.1.3'])).toEqual(['1.1.1.1', '1.1.1.3']);
    expect(sortIp(['1.1.2.1', '1.1.1.3'])).toEqual(['1.1.1.3', '1.1.2.1']);
    expect(sortIp(['1.1.1.1', '1.1.1.3'], 'desc')).toEqual(['1.1.1.3', '1.1.1.1']);
  });
  test('compare ip', () => {
    expect(compareIp('1.1.2.3', '1.2.1.1')).toBeLessThan(0);
    expect(compareIp('2.1.2.3', '1.2.1.1')).toBeGreaterThan(0);
    expect(compareIp('2.1.2.3', '2.1.2.3')).toBe(0);
  });
  test('get ip range', () => {
    expect(getIpRange('1.1.1.1/24')).toEqual({ start: '1.1.1.0', end: '1.1.1.255' });
    expect(getIpRange('1.1.1.1/25')).toEqual({ start: '1.1.1.0', end: '1.1.1.127' });
    expect(getIpRange('1.1.1.1/23')).toEqual({ start: '1.1.0.0', end: '1.1.1.255' });
  });
  test('is same network', () => {
    expect(isSameNetwork('1.1.1.1', '1.1.1.2', 24)).toBe(true);
    expect(isSameNetwork('1.1.2.1', '1.1.1.2', 24)).toBe(false);
    expect(isSameNetwork('1.1.1.1', '1.1.2.1', 23)).toBe(false);
    expect(isSameNetwork('1.1.2.1', '1.1.3.2', 23)).toBe(true);
  });
});