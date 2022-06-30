import _items from './_items.js'; // WeakMap of items

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(item) {
    _items.get(this).push(item);
  }

  pop() {
    if (this.count === 0) throw new Error('The stack is empty.');
    return _items.get(this).pop();
  }

  peek() {
    if (this.count === 0) throw new Error('The stack is empty.');
    return _items.get(this)[this.count - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
