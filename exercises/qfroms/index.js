// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.data = new Stack();
  }


add(element) {

  let intermediate = new Stack();
  while (this.data.peek()){
    intermediate.push(this.data.pop());
  }

  intermediate.push(element);

  while (intermediate.peek()){
    this.data.push(intermediate.pop());
  }

  return this.data;
}

remove() {

  return this.data.pop();
}

peek() {
  // let intermediate = new Stack();
  // while (this.data.peek()){
  //   intermediate.push(this.data.pop());
  // }
  //
  // let res = intermediate.peek();
  //
  // while (intermediate.peek()){
  //   this.data.push(intermediate.pop());
  // }
  //
  // return res;

  return this.data.peek();
}

}
module.exports = Queue;
