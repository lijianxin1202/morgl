import { SinglyLinkedList } from 'models/linked-list';

export function reverse(link: SinglyLinkedList) {
  if (!link) {
    return link;
  }
  let current = link;
  let next = link.next;
  current.next = undefined;
  while (next) {
    let nnext = next.next;
    next.next = current;
    current = next;
    next = nnext;
  }
  return current;
}
