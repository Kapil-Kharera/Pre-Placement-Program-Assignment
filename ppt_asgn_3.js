//Q1.
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  console.log(stack.isEmpty()); // Output: true
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // Output: 30
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.size()); // Output: 2
  
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
  

  //Q2.
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  console.log(queue.isEmpty()); // Output: true
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.front()); // Output: 10
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.size()); // Output: 2
  
  queue.clear();
  console.log(queue.isEmpty()); // Output: true
  