// Assignment-13

// Q1.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewList(list1, list2) {
  if (list1 === null || list2 === null) {
    return null;
  }

  let head = null;
  let tail = null;

  while (list1 !== null && list2 !== null) {
    let newNode = null;

    if (list1.data >= list2.data) {
      newNode = new Node(list1.data);
      list1 = list1.next;
    } else {
      newNode = new Node(list2.data);
      list2 = list2.next;
    }

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  // Add remaining nodes from list1, if any
  while (list1 !== null) {
    let newNode = new Node(list1.data);
    tail.next = newNode;
    tail = newNode;
    list1 = list1.next;
  }

  // Add remaining nodes from list2, if any
  while (list2 !== null) {
    let newNode = new Node(list2.data);
    tail.next = newNode;
    tail = newNode;
    list2 = list2.next;
  }

  return head;
}

// Create the first linked list: 5 -> 2 -> 3 -> 8
const list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

// Create the second linked list: 1 -> 7 -> 4 -> 5
const list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

// Create the new linked list using the greater nodes
const newList = createNewList(list1, list2);

// Print the elements of the new linked list
let current = newList;
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

function removeDuplicates(head) {
  if (head === null) {
    return null;
  }

  let current = head;
  while (current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Create the linked list: 11->11->11->21->43->43->60
const head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(43);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(60);

// Remove duplicates from the linked list
const newList = removeDuplicates(head);

// Print the elements of the new linked list
let current = newList;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q3.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseKNodes(head, k) {
  if (head === null || head.next === null || k <= 1) {
    return head;
  }

  let current = head;
  let prev = null;

  let count = 0;
  while (current !== null && count < k) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    count++;
  }

  if (current !== null) {
    head.next = reverseKNodes(current, k);
  }

  return prev;
}

// Create the linked list: 1->2->2->4->5->6->7->8
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

// Reverse every 4 nodes in the linked list
const k = 4;
const newHead = reverseKNodes(head, k);

// Print the elements of the new linked list
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q4.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k) {
  if (head === null || head.next === null || k <= 1) {
    return head;
  }

  let current = head;
  let prev = null;
  let nextNode = null;

  let count = 0;
  while (current !== null && count < k) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    count++;
  }

  if (head !== null) {
    head.next = current;
  }

  count = 0;
  while (count < k - 1 && current !== null) {
    current = current.next;
    count++;
  }

  if (current !== null) {
    current.next = reverseAlternateKNodes(current.next, k);
  }

  return prev;
}

// Create the linked list: 1->2->3->4->5->6->7->8->9
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Reverse every alternate 3 nodes in the linked list
const k = 3;
const newHead = reverseAlternateKNodes(head, k);

// Print the elements of the new linked list
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q.5
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  if (head === null) {
    return null;
  }

  let last = null;
  let prev = null;
  let current = head;

  // Traverse the list and keep track of the last occurrence of the key
  while (current !== null) {
    if (current.data === key) {
      last = prev;
    }
    prev = current;
    current = current.next;
  }

  // If the key is not found, return the original list
  if (last === null) {
    return head;
  }

  // If the last occurrence is the first node, update the head
  if (last === head) {
    head = head.next;
  } else {
    last.next = last.next.next;
  }

  return head;
}

// Create the linked list: 1->2->3->5->2->10
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

// Delete the last occurrence of key = 2 from the linked list
const key = 2;
const newHead = deleteLastOccurrence(head, key);

// Print the elements of the new linked list
let current = newHead;
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

function mergeLists(a, b) {
  if (a === null) {
    return b;
  }
  if (b === null) {
    return a;
  }

  let result = null;
  if (a.data <= b.data) {
    result = a;
    result.next = mergeLists(a.next, b);
  } else {
    result = b;
    result.next = mergeLists(a, b.next);
  }

  return result;
}

// Create the first sorted linked list: 5->10->15
const a = new Node(5);
a.next = new Node(10);
a.next.next = new Node(15);

// Create the second sorted linked list: 2->3->20
const b = new Node(2);
b.next = new Node(3);
b.next.next = new Node(20);

// Merge the two lists
const mergedHead = mergeLists(a, b);

// Print the elements of the merged list
let current = mergedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q7.
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let previous = null;

  while (current !== null) {
    // Swap the previous and next pointers of the current node
    const temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the next node
    previous = current;
    current = current.prev;
  }

  // Update the head of the reversed list
  head = previous;

  return head;
}

// Create the original doubly linked list: 10<->8<->4<->2
const head = new Node(10);
const node1 = new Node(8);
const node2 = new Node(4);
const node3 = new Node(2);
head.next = node1;
node1.prev = head;
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

// Reverse the doubly linked list
const reversedHead = reverseDoublyLinkedList(head);

// Traverse the reversed list and print the elements
let current = reversedHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}



// Q8.
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeFromPosition(head, position) {
  if (head === null) {
    return null;
  }

  let current = head;

  // If position is 1, update the head
  if (position === 1) {
    head = current.next;
    if (head !== null) {
      head.prev = null;
    }
    return head;
  }

  // Traverse to the node at the given position
  let count = 1;
  while (count < position && current !== null) {
    current = current.next;
    count++;
  }

  // If position is greater than the number of nodes
  if (current === null) {
    return head;
  }

  // Update the previous node's next pointer
  if (current.prev !== null) {
    current.prev.next = current.next;
  }

  // Update the next node's previous pointer
  if (current.next !== null) {
    current.next.prev = current.prev;
  }

  return head;
}

// Create the original doubly linked list: 1<->3<->4
const head = new Node(1);
const node1 = new Node(3);
const node2 = new Node(4);
head.next = node1;
node1.prev = head;
node1.next = node2;
node2.prev = node1;

// Delete node from position 3
const position = 3;
const newHead = deleteNodeFromPosition(head, position);

// Traverse the updated list and print the elements
let current = newHead;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
