// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let s = 0;
    let node = this.head;
    while (node) {
      s += 1;
      node = node.next;
    }

    return s;
  }


  getFirst() {
    return this.head;
  }

  getLast() {
    let last = this.head;

    while (last.next) {
      last = last.next
    }
    return last;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if (this.head.next) {
      this.head = this.head.next;
    } else this.head = null;
  }
}

module.exports = { Node, LinkedList };
