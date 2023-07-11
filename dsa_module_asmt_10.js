// Assignment-10

// Q.1
// Question: Check if a number is a power of three
function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
}

// Test the function
console.log(isPowerOfThree(27)); // Output: true
console.log(isPowerOfThree(45)); // Output: false


// Q2.
function lastRemaining(n) {
  let leftToRight = true;
  let remaining = n;
  let step = 1;
  let head = 1;

  while (remaining > 1) {
    if (leftToRight || remaining % 2 === 1) {
      head += step;
    }

    remaining /= 2;
    step *= 2;
    leftToRight = !leftToRight;
  }

  return head;
}

// Test the function
console.log(lastRemaining(9)); // Output: 6


// Q3.
function printSubsets(set, subset = '', index = 0) {
  if (index === set.length) {
    console.log(subset);
    return;
  }

  // Include current character in the subset
  printSubsets(set, subset + set[index], index + 1);

  // Exclude current character from the subset
  printSubsets(set, subset, index + 1);
}

// Test the function
printSubsets('abc');


// Q4.
function calculateLength(str) {
  if (str === '') {
    return 0;
  } else {
    return 1 + calculateLength(str.slice(1));
  }
}

// Test the function
console.log(calculateLength('abcd'));  // Output: 4
console.log(calculateLength('GEEKSFORGEEKS'));  // Output: 13


// Q5.
function countContiguousSubstrings(S) {
  let count = 0;
  const n = S.length;

  // Traverse the string
  for (let i = 0; i < n; i++) {
    let startChar = S[i];
    let endCharCount = 1;

    // Count all substrings starting with the current character
    for (let j = i + 1; j < n; j++) {
      if (S[j] === startChar) {
        count++;
      } else {
        endCharCount++;
      }
    }

    // Add the count of substrings ending with the current character
    count += endCharCount;
  }

  return count;
}

// Test the function
console.log(countContiguousSubstrings('abcab'));  // Output: 7
console.log(countContiguousSubstrings('aba'));  // Output: 4


// Q6.
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
    return 1;
  }

  let moves = 0;
  moves += towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
  moves++;
  moves += towerOfHanoi(n - 1, auxiliary, source, destination);

  return moves;
}

// Test the function
const n = 2;
const totalMoves = towerOfHanoi(n, 1, 2, 3);
console.log(`Total moves: ${totalMoves}`);


// Q7.
function swap(str, i, j) {
  const temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}

function permute(str, l, r, result) {
  if (l === r) {
    result.push(str.join(''));
  } else {
    for (let i = l; i <= r; i++) {
      swap(str, l, i);
      permute(str, l + 1, r, result);
      swap(str, l, i); // backtrack
    }
  }
}

function printAllPermutations(str) {
  const result = [];
  const charArray = str.split('');
  permute(charArray, 0, charArray.length - 1, result);
  return result;
}

// Test the function
const str = 'cd';
const permutations = printAllPermutations(str);
console.log(permutations.join(' '));


// Q8.
function countConsonants(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!vowels.includes(char) && char >= 'a' && char <= 'z') {
      count++;
    }
  }

  return count;
}

// Test the function
const str = 'geeksforgeeks portal';
const consonantCount = countConsonants(str);
console.log(consonantCount);
