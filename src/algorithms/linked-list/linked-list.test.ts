import { SinglyLinkedList } from 'models/linked-list';
import { reverse } from './singly-linked-list';

describe('linked-list', () => {
  test('reverse', () => {
    let a: SinglyLinkedList = { value: 1 };
    let b: SinglyLinkedList = { value: 2 };
    let c: SinglyLinkedList = { value: 3 };
    expect(reverse(a)).toEqual(a);
    a.next = b;
    expect(reverse(a)).toEqual({ value: 2, next: { value: 1 } });
    reverse(b);
    b.next = c;
    expect(reverse(a)).toEqual({
      value: 3,
      next: { value: 2, next: { value: 1 } }
    });
  });
});
