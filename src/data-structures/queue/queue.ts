export default class Queue<T> {
  constructor(arr?: T[]) {
    if (arr) {
      this.arr = arr;
      this.head = 0;
      this.tail = arr.length - 1;
    }
  }
  private arr: T[] = [];
  private head: number = 0;
  private tail: number = -1;
  isEmpty() {
    return this.head > this.tail;
  }
  enQueue(x: T) {
    this.tail++;
    this.arr[this.tail] = x;
  }
  deQueue() {
    if (this.head <= this.tail) {
      this.head++;
      return this.arr[this.head - 1];
    }
    throw new Error('under flow');
  }
  toString() {
    return this.arr.slice(this.head, this.tail + 1).join(',');
  }
}
