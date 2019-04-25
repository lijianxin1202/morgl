export interface SinglyLinkedList {
  value: any;
  next?: SinglyLinkedList;
}

export interface DoublyLinkedList {
  value: any;
  next?: DoublyLinkedList;
  prev?: DoublyLinkedList;
}
