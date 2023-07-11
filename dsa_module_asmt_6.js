// Assignment-6

// Q1.
function reconstructPermutation(s) {
  const perm = new Array(s.length + 1).fill(0);
  let low = 0;
  let high = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      perm[low] = i;
      low++;
    } else {
      perm[high] = i;
      high--;
    }
  }

  perm[low] = s.length;

  return perm;
}

// Example usage:
const s = 'IDID';
const permutation = reconstructPermutation(s);

console.log(permutation); // Output: [0, 4, 1, 3, 2]


// Q2.
function searchMatrix(matrix, target) {
  const m = matrix.length; // Number of rows
  const n = matrix[0].length; // Number of columns

  let start = 0;
  let end = m * n - 1;
  let found = false;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;

    if (matrix[row][col] === target) {
      found = true;
      break;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return found;
}

// Example usage:
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 3;
const isPresent = searchMatrix(matrix, target);

console.log(isPresent); // Output: true


// Q3.
function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) {
    return false;
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (arr[left] >= arr[left + 1] || arr[right] >= arr[right - 1]) {
      break;
    }

    left++;
    right--;
  }

  return left === right;
}

// Example usage:
const arr = [2, 1];
const isValidMountain = validMountainArray(arr);

console.log(isValidMountain); // Output: false


// Q4.
function findMaxLength(nums) {
  const map = {};
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (count === 0) {
      maxLen = i + 1;
    } else if (map[count] !== undefined) {
      maxLen = Math.max(maxLen, i - map[count]);
    } else {
      map[count] = i;
    }
  }

  return maxLen;
}

// Example usage:
const nums = [0, 1];
const maxLength = findMaxLength(nums);

console.log(maxLength); // Output: 2


// Q5.
function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b); // Sort nums1 in non-decreasing order
  nums2.sort((a, b) => a - b); // Sort nums2 in non-decreasing order

  let minProductSum = 0;

  for (let i = 0; i < nums1.length; i++) {
    minProductSum += nums1[i] * nums2[nums2.length - 1 - i];
  }

  return minProductSum;
}

// Example usage:
const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const minimumProductSum = minProductSum(nums1, nums2);

console.log(minimumProductSum); // Output: 40


// Q6.
function findOriginalArray(changed) {
  const original = [];

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    const half = num / 2;
    const halfIndex = changed.indexOf(half);

    if (halfIndex === -1) {
      return [];
    }

    original.push(half);
    changed.splice(halfIndex, 1);
  }

  return original;
}

// Example usage:
const changed = [1, 3, 4, 2, 6, 8];
const originalArray = findOriginalArray(changed);

console.log(originalArray); // Output: [1, 3, 4]



// Q7.
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let col = startCol; col <= endCol; col++) {
      matrix[startRow][col] = num++;
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      matrix[row][endCol] = num++;
    }
    endCol--;

    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = num++;
    }
    endRow--;

    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = num++;
    }
    startCol++;
  }

  return matrix;
}

// Example usage:
const n = 3;
const result = generateMatrix(n);

console.log(result);
// Output: [[1,2,3],[8,9,4],[7,6,5]]


// Q8.
function multiplySparseMatrices(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  // Create transpose of mat2
  const mat2T = Array.from({ length: n }, () => Array(k).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
      mat2T[j][i] = mat2[i][j];
    }
  }

  // Initialize result matrix
  const result = Array.from({ length: m }, () => Array(n).fill(0));

  // Multiply matrices
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let x = 0; x < k; x++) {
        const ele1 = mat1[i][x];
        const ele2 = mat2T[j][x];
        if (ele1 !== 0 && ele2 !== 0) {
          sum += ele1 * ele2;
        }
      }
      result[i][j] = sum;
    }
  }

  return result;
}

// Example usage:
const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
const result = multiplySparseMatrices(mat1, mat2);

console.log(result);
// Output: [[7, 0, 0], [-7, 0, 3]]
