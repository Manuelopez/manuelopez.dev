class StackNode<T> {
  public val: T | null;
  public next: StackNode<T> | null;
  public prev: StackNode<T> | null;
  constructor() {
    this.val = null;
    this.next = null;
    this.prev = null;
  }
}
export class Stack<T> {
  private head: StackNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public isEmpty() {
    return this.head === null;
  }

  public push(val: T) {
    const n = { val: val, next: null, prev: null } as StackNode<T>;
    if (this.isEmpty()) {
      this.head = n;
    } else {
      n.prev = this.head;
      this.head!.next = n;
      this.head = n;
    }

    this.size++;
  }

  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Pop operation on empty stack');
    }

    const n = this.head!;
    this.head = this.head!.prev;
    this.head!.next = null;

    this.size--;
    return n.val!;
  }

  public top(): T {
    if (this.isEmpty()) {
      throw new Error('Top operation on empty stack');
    }

    return this.head!.val!;
  }
}
