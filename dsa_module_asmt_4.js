// Assignment-4

// Q1.
function findCommonElements(arr1, arr2, arr3) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  const result = [];

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    const num1 = arr1[p1];
    const num2 = arr2[p2];
    const num3 = arr3[p3];

    if (num1 === num2 && num2 === num3) {
      result.push(num1);
      p1++;
      p2++;
      p3++;
    } else if (num1 <= num2 && num1 <= num3) {
      p1++;
    } else if (num2 <= num1 && num2 <= num3) {
      p2++;
    } else {
      p3++;
    }
  }

  return result;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
const commonElements = findCommonElements(arr1, arr2, arr3);

console.log(commonElements); // Output: [1, 5]


// Q2.
function findDisjoint(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const diff1 = new Set([...set1].filter(num => !set2.has(num)));
  const diff2 = new Set([...set2].filter(num => !set1.has(num)));

  return [Array.from(diff1), Array.from(diff2)];
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const disjoint = findDisjoint(nums1, nums2);

console.log(disjoint); // Output: [[1, 3], [4, 6]]


// Q3.
function transpose(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  const transposed = Array.from(Array(numCols), () => Array(numRows));

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      transposed[col][row] = matrix[row][col];
    }
  }

  return transposed;
}

// Example usage:
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const transposedMatrix = transpose(matrix);

console.log(transposedMatrix);
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]


// Q4.
function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);

  let maxSum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i];
  }

  return maxSum;
}

// Example usage:
const nums = [1, 4, 3, 2];
const maxPairSum = arrayPairSum(nums);

console.log(maxPairSum); // Output: 4


// Q.5
function arrangeCoins(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const totalCoins = (mid * (mid + 1)) / 2;

    if (totalCoins <= n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

// Example usage:
const n = 5;
const completeRows = arrangeCoins(n);

console.log(completeRows); // Output: 2


// Q6.
function sortedSquares(nums) {
  const result = [];

  for (let num of nums) {
    result.push(num * num);
  }

  result.sort((a, b) => a - b);

  return result;
}

// Example usage:
const nums = [-4, -1, 0, 3, 10];
const squaredNumbers = sortedSquares(nums);

console.log(squaredNumbers); // Output: [0, 1, 9, 16, 100]


// Q7.
function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (let op of ops) {
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);
  }

  return minRow * minCol;
}

// Example usage:
const m = 3;
const n = 3;
const ops = [[2, 2], [3, 3]];
const maxIntegers = maxCount(m, n, ops);

console.log(maxIntegers); // Output: 4


// Q8.
function shuffle(nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

// Example usage:
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const rearrangedArray = shuffle(nums, n);

console.log(rearrangedArray); // Output: [2, 3, 5, 4, 1, 7]
