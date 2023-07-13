// Assignment-14


// Q1.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head;

  // Detect the loop in the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  // If there is no loop in the linked list
  if (slow !== fast) {
    return false;
  }

  // Find the starting point of the loop
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next pointer of the last node to null
  fast.next = null;

  return true;
}

// Create the linked list with a loop: 1 -> 3 -> 4 -> 3
const head = new Node(1);
const node1 = new Node(3);
const node2 = new Node(4);
const node3 = new Node(3);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1;

// Detect and remove the loop
const loopDetected = detectAndRemoveLoop(head);

// Check if the loop was successfully removed
if (loopDetected) {
  console.log("Loop detected and removed");
} else {
  console.log("No loop detected");
}

// Traverse the updated linked list
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}



// Q2.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addOne(head) {
  let dummy = new Node(0); // Create a dummy node
  dummy.next = head;

  let lastNonNine = dummy;
  let current = head;

  // Find the rightmost non-nine digit
  while (current !== null) {
    if (current.value !== 9) {
      lastNonNine = current;
    }
    current = current.next;
  }

  // Increment the rightmost non-nine digit by 1
  lastNonNine.value += 1;

  // Set all digits after the rightmost non-nine digit to 0
  current = lastNonNine.next;
  while (current !== null) {
    current.value = 0;
    current = current.next;
  }

  // If the dummy node is not the final result, return the modified linked list
  if (dummy.value === 0) {
    return dummy.next;
  } else {
    return dummy;
  }
}

// Create the linked list representing the number 4->5->6
const head = new Node(4);
const node1 = new Node(5);
const node2 = new Node(6);
head.next = node1;
node1.next = node2;

// Add 1 to the number represented by the linked list
const result = addOne(head);

// Traverse the modified linked list and construct the result number
let current = result;
let number = "";
while (current !== null) {
  number += current.value;
  current = current.next;
}

console.log(number);



// Q3.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function mergeLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let result = null;

  if (list1.data < list2.data) {
    result = list1;
    result.bottom = mergeLists(list1.bottom, list2);
  } else {
    result = list2;
    result.bottom = mergeLists(list1, list2.bottom);
  }

  return result;
}

function flattenLinkedList(head) {
  if (!head || !head.next) return head;

  head.next = flattenLinkedList(head.next);

  head = mergeLists(head, head.next);

  return head;
}

// Create the linked list with sub-linked lists
const head = new Node(5);
head.bottom = new Node(7);
head.next = new Node(10);
head.next.bottom = new Node(20);
head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);
head.next.next.next.next = new Node(40);
head.next.next.next.next.bottom = new Node(45);
head.next.next.next.next.next = new Node(50);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

// Flatten the linked list
const flattened = flattenLinkedList(head);

// Print the flattened linked list
let current = flattened;
let result = "";
while (current) {
  result += current.data + "-> ";
  current = current.bottom;
}
result += "null";

console.log(result);


// Q4.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function copySpecialLinkedList(head) {
  if (!head) return null;

  // Step 1: Create a copy of each node and insert it after the original node
  let current = head;
  while (current) {
    const copyNode = new Node(current.data);
    copyNode.next = current.next;
    current.next = copyNode;
    current = copyNode.next;
  }

  // Step 2: Update the random pointers of the copy nodes
  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // Step 3: Separate the original list and the copy list
  const dummy = new Node(0);
  let newHead = null;
  let copyCurrent = dummy;

  current = head;
  while (current) {
    copyCurrent.next = current.next;
    current.next = current.next.next;
    copyCurrent = copyCurrent.next;
    current = current.next;
  }

  newHead = dummy.next;

  return newHead;
}

// Create the special linked list
const head = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

head.next = node2;
head.random = node2;
node2.next = node3;
node2.random = node4;
node3.next = node4;

// Copy the special linked list
const copiedHead = copySpecialLinkedList(head);

// Print the copied linked list (including random pointers)
let current = copiedHead;
while (current) {
  const randomValue = current.random ? current.random.data : "null";
  console.log(`Data: ${current.data}, Random: ${randomValue}`);
  current = current.next;
}



// Q5.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}

// Create the linked list
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Group the nodes with odd and even indices
const reorderedHead = oddEvenList(head);

// Print the reordered list
let current = reorderedHead;
while (current) {
  console.log(current.val);
  current = current.next;
}



// Q6.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function leftShiftLinkedList(head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k %= length;
  if (k === 0) {
    return head;
  }

  let count = length - k;
  let newTail = head;
  while (count > 1) {
    newTail = newTail.next;
    count--;
  }

  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;

  return newHead;
}

// Create the linked list
const head = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(7);
const node4 = new ListNode(8);
const node5 = new ListNode(9);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Left-shift the linked list by 3 nodes
const k = 3;
const newHead = leftShiftLinkedList(head, k);

// Print the shifted list
let current = newHead;
while (current) {
  console.log(current.val);
  current = current.next;
}


// Q7.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function nextGreaterNodes(head) {
  // Convert linked list to array
  const arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const stack = []; // Stack to store indices of elements in the array
  const result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

// Create the linked list
const head = new ListNode(2);
const node2 = new ListNode(1);
const node3 = new ListNode(5);

head.next = node2;
node2.next = node3;

// Find the next greater node for each node
const result = nextGreaterNodes(head);

console.log(result);


// Q8.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeZeroSumSublists(head) {
  // Create a dummy node to handle cases where the head needs to be deleted
  const dummy = new ListNode(0);
  dummy.next = head;
  
  let prefixSum = 0;
  const sumMap = new Map();
  sumMap.set(0, dummy); // Initialize the map with a sum of 0 pointing to the dummy node
  
  let curr = head;
  
  while (curr) {
    prefixSum += curr.val;
    
    if (sumMap.has(prefixSum)) {
      // Delete nodes between sumMap.get(prefixSum).next and curr (inclusive)
      let node = sumMap.get(prefixSum).next;
      let nodeSum = prefixSum;
      
      while (node !== curr) {
        nodeSum += node.val;
        sumMap.delete(nodeSum);
        node = node.next;
      }
      
      // Update the next pointer of the previous node to skip the deleted nodes
      sumMap.get(prefixSum).next = curr.next;
    } else {
      // Store the current sum and its corresponding node in the map
      sumMap.set(prefixSum, curr);
    }
    
    curr = curr.next;
  }
  
  return dummy.next;
}

// Create the linked list
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(-3);
const node4 = new ListNode(3);
const node5 = new ListNode(1);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Remove zero sum sublists
const result = removeZeroSumSublists(head);

// Print the resulting linked list
let curr = result;
const output = [];
while (curr) {
  output.push(curr.val);
  curr = curr.next;
}

console.log(output);
