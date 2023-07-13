// Assignment-16


// Q1.
function findNextGreaterFrequency(arr) {
  const frequencyMap = new Map();
  const result = [];

  // Calculate the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
    } else {
      frequencyMap.set(arr[i], 1);
    }
  }

  // Find the nearest element with a greater frequency
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (frequencyMap.get(arr[j]) > frequencyMap.get(arr[i])) {
        result.push(arr[j]);
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(-1);
    }
  }

  return result;
}

// Example usage
const arr = [1, 1, 2, 3, 4, 2, 1];
console.log(findNextGreaterFrequency(arr)); // Output: [-1, -1, 1, 2, 2, 1, -1]



// Q2.
function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

// Example usage
const stack = [34, 3, 31, 98, 92, 23];
console.log(sortStack(stack)); // Output: [3, 23, 31, 34, 92, 98]



// Q3.
function deleteMiddle(stack, n, curr = 0) {
  // Base case: if the stack is empty or we have reached the middle element
  if (stack.length === 0 || curr === Math.floor(n / 2)) {
    stack.pop();
    return;
  }

  // Remove the top element and recursively delete the middle
  const temp = stack.pop();
  deleteMiddle(stack, n, curr + 1);

  // Push the removed element back onto the stack
  stack.push(temp);
}

// Example usage
const stack1 = [1, 2, 3, 4, 5];
deleteMiddle(stack1, stack1.length);
console.log(stack1); // Output: [1, 2, 4, 5]

const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddle(stack2, stack2.length);
console.log(stack2); // Output: [1, 2, 4, 5, 6]



// Q4.
function checkIncreasingOrder(queue) {
  const stack = [];
  const sortedQueue = [];

  while (queue.length > 0) {
    const front = queue.shift();

    if (front === sortedQueue.length + 1) {
      // If the front element is the expected number, push it to the sorted queue
      sortedQueue.push(front);
    } else if (stack.length > 0 && stack[stack.length - 1] === sortedQueue.length + 1) {
      // If the top of the stack is the expected number, push it to the sorted queue
      sortedQueue.push(stack.pop());
      queue.unshift(front); // Put the front element back to the queue
    } else {
      // Push the front element to the stack
      stack.push(front);
    }

    // Check if the top of the stack can be pushed to the sorted queue
    while (stack.length > 0 && stack[stack.length - 1] === sortedQueue.length + 1) {
      sortedQueue.push(stack.pop());
    }
  }

  // Check if there are any remaining elements in the stack
  while (stack.length > 0) {
    sortedQueue.push(stack.pop());
  }

  // Check if the elements in the sorted queue are in increasing order
  for (let i = 1; i < sortedQueue.length; i++) {
    if (sortedQueue[i] <= sortedQueue[i - 1]) {
      return "No";
    }
  }

  return "Yes";
}

// Example usage
const queue1 = [5, 1, 2, 3, 4];
console.log(checkIncreasingOrder(queue1)); // Output: Yes

const queue2 = [5, 1, 2, 6, 3, 4];
console.log(checkIncreasingOrder(queue2)); // Output: No



// Q5.
function reverseNumber(number) {
  const stack = [];
  const numberString = String(number);

  // Push each digit onto the stack
  for (let i = 0; i < numberString.length; i++) {
    stack.push(numberString[i]);
  }

  let reversedNumber = "";

  // Pop the digits from the stack to form the reversed number
  while (stack.length > 0) {
    reversedNumber += stack.pop();
  }

  return parseInt(reversedNumber);
}

// Example usage
console.log(reverseNumber(365)); // Output: 563
console.log(reverseNumber(6899)); // Output: 9986


// Q6.
function reverseK(queue, k) {
  const stack = [];

  // Push the first k elements onto the stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.dequeue());
  }

  // Enqueue the elements from the stack back into the queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  // Move the remaining elements after the reversed elements
  for (let i = 0; i < queue.size() - k; i++) {
    queue.enqueue(queue.dequeue());
  }
}

// Example usage
const queue = {
  items: [1, 2, 3, 4, 5],
  enqueue: function (item) {
    this.items.push(item);
  },
  dequeue: function () {
    return this.items.shift();
  },
  size: function () {
    return this.items.length;
  },
  front: function () {
    return this.items[0];
  },
};

reverseK(queue, 3);
console.log(queue.items); // Output: [3, 2, 1, 4, 5]



// Q7.
function countRemainingWords(sequence) {
  const stack = [];

  for (let word of sequence) {
    if (stack.length > 0 && word === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  return stack.length;
}

// Example usage
const sequence = ["ab", "aa", "aa", "bcd", "ab"];
const remainingWords = countRemainingWords(sequence);
console.log(remainingWords); // Output: 3



// Q8.
function findMaxAbsoluteDifference(arr) {
  const n = arr.length;
  const leftStack = [];
  const rightStack = [];
  const leftSmaller = [];
  const rightSmaller = [];

  // Find the nearest smaller element on the left side
  for (let i = 0; i < n; i++) {
    while (leftStack.length > 0 && leftStack[leftStack.length - 1] >= arr[i]) {
      leftStack.pop();
    }
    if (leftStack.length === 0) {
      leftSmaller.push(0);
    } else {
      leftSmaller.push(leftStack[leftStack.length - 1]);
    }
    leftStack.push(arr[i]);
  }

  // Find the nearest smaller element on the right side
  for (let i = n - 1; i >= 0; i--) {
    while (rightStack.length > 0 && rightStack[rightStack.length - 1] >= arr[i]) {
      rightStack.pop();
    }
    if (rightStack.length === 0) {
      rightSmaller[i] = 0;
    } else {
      rightSmaller[i] = rightStack[rightStack.length - 1];
    }
    rightStack.push(arr[i]);
  }

  // Calculate the maximum absolute difference
  let maxDiff = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
}

// Example usage
const arr = [2, 4, 8, 7, 7, 9, 3];
const maxDiff = findMaxAbsoluteDifference(arr);
console.log(maxDiff); // Output: 4
