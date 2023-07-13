// Assignment-15


// Q.1
function findNextGreater(arr) {
  const stack = [];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.unshift(-1);
    } else {
      result.unshift(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result;
}

// Example usage
const arr = [1, 3, 2, 4];
const nextGreater = findNextGreater(arr);
console.log(nextGreater);


// Q2.
function findNearestSmaller(arr) {
  const stack = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result;
}

// Example usage
const arr = [1, 6, 2];
const nearestSmaller = findNearestSmaller(arr);
console.log(nearestSmaller);


// Q3.
class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(value) {
    // Push the new value into q1
    this.q1.push(value);
  }

  pop() {
    // Move all elements except the last one from q1 to q2
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    // Pop the last element from q1
    const poppedElement = this.q1.shift();

    // Swap q1 and q2 to maintain the order of elements
    [this.q1, this.q2] = [this.q2, this.q1];

    return poppedElement;
  }

  isEmpty() {
    return this.q1.length === 0 && this.q2.length === 0;
  }
}

// Example usage
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4



// Q4.
function reverseStack(stack) {
  if (stack.length === 0) {
    return;
  }

  const temp = stack.pop();

  reverseStack(stack);

  insertAtBottom(stack, temp);
}

function insertAtBottom(stack, value) {
  if (stack.length === 0) {
    stack.push(value);
    return;
  }

  const temp = stack.pop();

  insertAtBottom(stack, value);

  stack.push(temp);
}

// Example usage
const stack = [3, 2, 1, 7, 6];
reverseStack(stack);
console.log(stack); // Output: [6, 7, 1, 2, 3]


// Q5.
function reverseString(string) {
  var stack = [];
  for (var i = 0; i < string.length; i++) {
    stack.push(string.charAt(i));
  }
  
  var reversedString = "";
  while (stack.length > 0) {
    reversedString += stack.pop();
  }
  
  return reversedString;
}

// Example usage
var s = "GeeksforGeeks";
var reversedS = reverseString(s);
console.log(reversedS); // Output: skeeGrofskeeG


// Q6.
function evaluatePostfix(expression) {
  var stack = [];
  
  for (var i = 0; i < expression.length; i++) {
    var char = expression[i];
    
    if (isOperator(char)) {
      var operand2 = stack.pop();
      var operand1 = stack.pop();
      var result = performOperation(operand1, operand2, char);
      stack.push(result);
    } else {
      stack.push(parseInt(char));
    }
  }
  
  return stack.pop();
}

function isOperator(char) {
  var operators = ['+', '-', '*', '/'];
  return operators.includes(char);
}

function performOperation(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
  }
}

// Example usage
var postfixExpression = "231*+9-";
var result = evaluatePostfix(postfixExpression);
console.log(result); // Output: -4



// Q7.
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    }
    var poppedVal = this.stack.pop();
    if (poppedVal === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());    // Output: 0
console.log(minStack.getMin()); // Output: -2



// Q8.
function trapRainWater(height) {
  if (height.length === 0) {
    return 0;
  }

  const n = height.length;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);
  let waterTrapped = 0;

  // Compute the maximum height of bars on the left of each bar
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Compute the maximum height of bars on the right of each bar
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Compute the amount of water trapped for each bar
  for (let i = 0; i < n; i++) {
    const minHeight = Math.min(leftMax[i], rightMax[i]);
    waterTrapped += minHeight - height[i];
  }

  return waterTrapped;
}

// Example usage
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapRainWater(height)); // Output: 6
