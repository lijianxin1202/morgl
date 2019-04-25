export default class Stack<T> {
  constructor(arr?: T[]) {
    if (arr) {
      this.arr = arr;
      this.top = arr.length - 1;
    }
  }
  private arr: T[] = [];
  private top: number = -1;
  isEmpty() {
    return this.top === -1;
  }
  push(x: T) {
    this.top++;
    this.arr[this.top] = x;
  }
  pop() {
    if (this.top !== -1) {
      this.top--;
      return this.arr[this.top + 1];
    }
    throw new Error('under flow');
  }
  peek() {
    return this.arr[this.top];
  }
  toString() {
    return this.arr.slice(0, this.top + 1).join(',');
  }
}
