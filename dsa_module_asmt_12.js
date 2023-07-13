// Assignment-12

// Q1.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteMiddleNode(head) {
  if (head === null || head.next === null) {
    // Empty list or only one node
    return null;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  // Delete the middle node
  prev.next = slow.next;

  return head;
}

// Create a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Delete the middle node
const newHead = deleteMiddleNode(head);

// Print the modified linked list
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q2.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Loop detected
    }
  }

  return false; // No loop found
}

// Create a sample linked list with a loop
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next; // Creating a loop

// Check if the linked list has a loop
const hasLoop = detectLoop(head);
console.log(hasLoop);


// Q3.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getNthFromEnd(head, N) {
  let slow = head;
  let fast = head;

  // Move the fast pointer N nodes ahead
  for (let i = 0; i < N; i++) {
    if (fast === null) {
      return null; // Linked list length is less than N
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Return the Nth node from the end
  return slow ? slow.data : null;
}

// Create a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Find the Nth node from the end
const NthNode = getNthFromEnd(head, 2);
console.log(NthNode);


// Q4.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true; // An empty list or a list with a single node is considered a palindrome
  }

  // Find the middle node using the slow and fast pointer technique
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let secondHalf = slow.next;
  let prev = null;
  let next = null;
  while (secondHalf !== null) {
    next = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = next;
  }

  // Compare the first half with the reversed second half
  let firstHalf = head;
  secondHalf = prev;
  while (secondHalf !== null) {
    if (firstHalf.data !== secondHalf.data) {
      return false; // Characters don't match, not a palindrome
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true; // All characters match, it is a palindrome
}

// Create a sample linked list for testing
const head1 = new Node('R');
head1.next = new Node('A');
head1.next.next = new Node('D');
head1.next.next.next = new Node('A');
head1.next.next.next.next = new Node('R');

const head2 = new Node('C');
head2.next = new Node('O');
head2.next.next = new Node('D');
head2.next.next.next = new Node('E');

// Check if the linked list is a palindrome
console.log(isPalindrome(head1)); // true
console.log(isPalindrome(head2)); // false


// Q5.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) {
    return; // No loop in the list
  }

  let slow = head;
  let fast = head;

  // Detect the loop using the slow and fast pointer technique
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break; // Loop detected
    }
  }

  if (slow !== fast) {
    return; // No loop in the list
  }

  // Move one pointer to the head and keep the other pointer at the meeting point
  let ptr1 = head;
  let ptr2 = slow;
  while (ptr1.next !== ptr2.next) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // Unlink the last node to remove the loop
  ptr2.next = null;
}

// Create a sample linked list for testing
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next; // Create a loop

// Remove the loop from the linked list
detectAndRemoveLoop(head);

// Check if the loop has been removed
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q6.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function skipMDeleteN(head, M, N) {
  if (head === null || M <= 0 || N <= 0) {
    return head; // Invalid input
  }

  let current = head;
  let prev = null;

  while (current !== null) {
    // Traverse M nodes
    for (let i = 1; i < M && current !== null; i++) {
      current = current.next;
    }

    if (current === null) {
      return head; // Reached the end of the list
    }

    // Delete N nodes
    let temp = current.next;
    for (let i = 1; i <= N && temp !== null; i++) {
      let next = temp.next;
      temp = null;
      temp = next;
    }
    current.next = temp;

    // Move to the next Mth node
    current = temp;
  }

  return head;
}

// Create a sample linked list for testing
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

// Traverse the linked list, retaining 2 nodes and deleting 2 nodes
const M = 2;
const N = 2;
const newHead = skipMDeleteN(head, M, N);

// Print the modified linked list
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}


// Q7.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAlternate(head1, head2) {
  if (head1 === null || head2 === null) {
    return head1; // Invalid input
  }

  let curr1 = head1;
  let curr2 = head2;

  while (curr1 !== null && curr2 !== null) {
    let next1 = curr1.next;
    let next2 = curr2.next;

    curr1.next = curr2;
    curr2.next = next1;

    curr1 = next1;
    curr2 = next2;
  }

  // Update the head of the second list to null
  head2 = null;

  return head1;
}

// Create the first linked list
const head1 = new Node(5);
head1.next = new Node(7);
head1.next.next = new Node(17);
head1.next.next.next = new Node(13);
head1.next.next.next.next = new Node(11);

// Create the second linked list
const head2 = new Node(12);
head2.next = new Node(10);
head2.next.next = new Node(2);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(6);

// Insert nodes of the second list into the first list at alternate positions
const newHead = insertAlternate(head1, head2);

// Print the modified first list
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q8.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircular(head) {
  if (head === null) {
    return false; // Empty list is not circular
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    if (slow === fast) {
      return true; // Found a cycle
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false; // No cycle found
}

// Create a circular linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head; // Make it circular by connecting the last node to the head

// Check if the linked list is circular
const circular = isCircular(head);
console.log(circular); // Output: true
