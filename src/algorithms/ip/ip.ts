import lodash from 'lodash';

export function sortIp(ips: Array<string>, order: 'asc' | 'desc' = 'asc') {
  const segments = ips.map(ip => {
    return ip.split('.').map(sub => parseInt(sub, 10));
  });
  const ordered = lodash.orderBy(segments, [0, 1, 2, 3], [order, order, order, order]);
  return ordered.map(segment => segment.join('.'));
}

export function compareIp(first: string, second: string) {
  const segments = [first, second].map(ip => {
    return ip.split('.').map(sub => parseInt(sub, 10));
  });
  return (
    segments[0][0] - segments[1][0] ||
    segments[0][1] - segments[1][1] ||
    segments[0][2] - segments[1][2] ||
    segments[0][3] - segments[1][3]
  );
}

export function isSameNetwork(ip1: string, ip2: string, mask: number) {
  [ip1, ip2] = [ip1, ip2].map(ip =>
    ip
      .split('.')
      .map(subIp => toBinary(subIp))
      .join(''),
  );
  return ip1.slice(0, -(32 - mask)) === ip2.slice(0, -(32 - mask));
}

export function getIpRange(ipMask: string) {
  let start = '';
  let end = '';
  const [ip, maskChar] = ipMask.split('/');
  const binaryIp = ip.split('.').map(subIp => toBinary(subIp)).join('');
  const mask = parseInt(maskChar);
  const networkSegment = binaryIp.slice(0, mask);
  const startArray = (networkSegment + Array(32 - mask).fill(0).join('')).match(/.{1,8}/g);
  const endArray = (networkSegment + Array(32 - mask).fill(1).join('')).match(/.{1,8}/g);
  if (startArray) {
    start = startArray.map(sub => parseInt(sub, 2)).join('.');
  }
  if (endArray) {
    end = endArray.map(sub => parseInt(sub, 2)).join('.');
  }
  return {
    start,
    end,
  }
}

function toBinary(decimal: string) {
  let decimalInt = parseInt(decimal, 10);
  let binary = decimalInt.toString(2);
  let length = binary.length;
  binary =
    Array(8 - length)
      .fill('0')
      .join('') + binary;
  return binary;
}