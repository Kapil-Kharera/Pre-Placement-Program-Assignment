// Assignment-17


// Q.1
function firstUniqChar(s) {
  const charMap = new Map();

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap.get(char) === 1) {
      return i;
    }
  }

  return -1; // No non-repeating character found
}

// Example usage
const s = "leetcode";
const index = firstUniqChar(s);
console.log(index); // Output: 0


// Q2.
function maxSubarraySumCircular(nums) {
  const n = nums.length;

  // Case 1: Maximum subarray sum without wrapping
  let maxSum = kadane(nums);

  // Case 2: Maximum subarray sum with wrapping
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
    nums[i] = -nums[i]; // Negate the elements for finding the minimum subarray sum
  }
  const minSum = kadane(nums);
  const circularSum = totalSum + minSum;

  // Return the maximum of the two cases
  return Math.max(maxSum, circularSum);
}

// Helper function for finding the maximum subarray sum (Kadane's algorithm)
function kadane(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage
const nums = [1, -2, 3, -2];
const maxSum = maxSubarraySumCircular(nums);
console.log(maxSum); // Output: 3



// Q3.
function countStudents(students, sandwiches) {
  const n = students.length;
  const queue = [...students]; // Create a queue from the students array

  let i = 0; // Index to iterate through the sandwiches

  while (queue.length > 0 && i < n) {
    if (queue[0] === sandwiches[i]) {
      // If the front student prefers the current sandwich, they take it
      queue.shift();
    } else {
      // If the front student doesn't prefer the current sandwich, they go to the end of the queue
      queue.push(queue.shift());
    }
    i++; // Move to the next sandwich
  }

  return queue.length; // Return the number of students unable to eat
}

// Example usage
const students = [1, 1, 0, 0];
const sandwiches = [0, 1, 0, 1];
const unableToEat = countStudents(students, sandwiches);
console.log(unableToEat); // Output: 0



// Q4.
class RecentCounter {
  constructor() {
    this.requests = []; // Array to store the recent requests
  }

  ping(t) {
    this.requests.push(t); // Add the new request to the requests array

    // Calculate the lower bound of the time range
    const lowerBound = t - 3000;

    // Remove any requests that are outside the time range
    while (this.requests[0] < lowerBound) {
      this.requests.shift();
    }

    return this.requests.length; // Return the number of requests within the time range
  }
}

// Example usage
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // Output: 1
console.log(recentCounter.ping(100));   // Output: 2
console.log(recentCounter.ping(3001));  // Output: 3
console.log(recentCounter.ping(3002));  // Output: 3



// Q5.
function findWinner(n, k) {
  let friends = [];
  for (let i = 1; i <= n; i++) {
    friends.push(i);
  }

  let index = 0;
  while (friends.length > 1) {
    index = (index + k - 1) % friends.length;
    friends.splice(index, 1);
  }

  return friends[0];
}

// Example usage
console.log(findWinner(5, 2));  // Output: 3



// Q6.
function revealCardsInOrder(deck) {
  deck.sort((a, b) => a - b);

  const result = [];
  const queue = [...deck];

  while (queue.length > 0) {
    result.push(queue.shift());
    if (queue.length > 0) {
      queue.push(queue.shift());
    }
  }

  return result;
}

// Example usage
console.log(revealCardsInOrder([17, 13, 11, 2, 3, 5, 7]));



// Q7.
class FrontMiddleBackQueue {
  constructor() {
    this.queue = [];
  }

  pushFront(val) {
    this.queue.unshift(val);
  }

  pushMiddle(val) {
    const mid = Math.floor(this.queue.length / 2);
    this.queue.splice(mid, 0, val);
  }

  pushBack(val) {
    this.queue.push(val);
  }

  popFront() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.shift();
  }

  popMiddle() {
    if (this.queue.length === 0) {
      return -1;
    }
    const mid = Math.floor((this.queue.length - 1) / 2);
    return this.queue.splice(mid, 1)[0];
  }

  popBack() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.pop();
  }
}

// Example usage
const q = new FrontMiddleBackQueue();
q.pushFront(1);
q.pushBack(2);
q.pushMiddle(3);
q.pushMiddle(4);
console.log(q.popFront());    // Output: 1
console.log(q.popMiddle());   // Output: 3
console.log(q.popMiddle());   // Output: 4
console.log(q.popBack());     // Output: 2
console.log(q.popFront());    // Output: -1



// Q8.
class DataStream {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.stream = [];
  }

  consec(num) {
    this.stream.push(num);
    if (this.stream.length < this.k) {
      return false;
    }
    const lastKIntegers = this.stream.slice(-this.k);
    return lastKIntegers.every((integer) => integer === this.value);
  }
}

// Example usage
const dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4));  // Output: false
console.log(dataStream.consec(4));  // Output: false
console.log(dataStream.consec(4));  // Output: true
console.log(dataStream.consec(3));  // Output: false
