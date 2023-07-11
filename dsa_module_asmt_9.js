// Assignment-9

// Q1.
// Question 1: Power of Two
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
}

console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false


// Q2.
// Question 2: Sum of First Natural Numbers
function sumOfNaturalNumbers(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfNaturalNumbers(3)); // Output: 6
console.log(sumOfNaturalNumbers(5)); // Output: 15


// Q3.
// Question: Factorial of N
function factorial(N) {
  if (N === 0 || N === 1) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= N; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(4)); // Output: 24


// Q4.
// Question: Exponent of N raised to P
function exponent(N, P) {
  let result = 1;
  for (let i = 1; i <= P; i++) {
    result *= N;
  }
  return result;
}

console.log(exponent(5, 2)); // Output: 25
console.log(exponent(2, 5)); // Output: 32


// Q5.
// Question: Find maximum element using recursion
function findMax(arr, index, max) {
  if (index >= arr.length) {
    return max;
  }

  if (arr[index] > max) {
    max = arr[index];
  }

  return findMax(arr, index + 1, max);
}

// Test the function
const arr1 = [1, 4, 3, -5, -4, 8, 6];
const arr2 = [1, 4, 45, 6, 10, -8];

console.log(findMax(arr1, 0, arr1[0])); // Output: 8
console.log(findMax(arr2, 0, arr2[0])); // Output: 45


// Q6.
// Question: Find Nth term of arithmetic progression series
function findNthTerm(a, d, N) {
  // Calculate Nth term using the formula: a + (N - 1) * d
  return a + (N - 1) * d;
}

// Test the function
console.log(findNthTerm(2, 1, 5)); // Output: 6
console.log(findNthTerm(5, 2, 10)); // Output: 23


// Q7.
// Question: Print all permutations of a given string
function permuteString(str) {
  const result = [];

  // Helper function to generate permutations
  function backtrack(str, permutation) {
    // Base case: If the permutation is complete, add it to the result
    if (str.length === 0) {
      result.push(permutation);
      return;
    }

    // Recursive case: Generate permutations by fixing each character in the current position
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const remaining = str.slice(0, i) + str.slice(i + 1);
      backtrack(remaining, permutation + char);
    }
  }

  // Start the backtracking process
  backtrack(str, '');

  return result;
}

// Test the function
console.log(permuteString('ABC')); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(permuteString('XY')); // Output: ["XY", "YX"]


// Q8.
// Question: Find the product of all array elements
function getProduct(arr) {
  let product = 1;

  // Multiply each element with the running product
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Test the function
console.log(getProduct([1, 2, 3, 4, 5])); // Output: 120
console.log(getProduct([1, 6, 3])); // Output: 18
