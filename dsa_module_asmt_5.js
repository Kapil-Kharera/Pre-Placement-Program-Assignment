// Assignment-5

// Q1.
function convertTo2D(original, m, n) {
  const result = [];

  for (let i = 0; i < m * n; i++) {
    const row = Math.floor(i / n);
    const col = i % n;

    if (!result[row]) {
      result[row] = [];
    }

    result[row][col] = original[i];
  }

  return result;
}

// Example usage:
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
const convertedArray = convertTo2D(original, m, n);

console.log(convertedArray); // Output: [[1, 2], [3, 4]]



// Q2.
function countCompleteRows(n) {
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

  return left - 1;
}

// Example usage:
const n = 5;
const completeRows = countCompleteRows(n);

console.log(completeRows); // Output: 2


// Q3.
function sortedSquares(nums) {
  const squares = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const square = num * num;
    squares.push(square);
  }

  squares.sort((a, b) => a - b);

  return squares;
}

// Example usage:
const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);

console.log(result); // Output: [0, 1, 9, 16, 100]


// Q4.
function findDistinctIntegers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result1 = [];
  const result2 = [];

  for (const num of nums1) {
    if (!set2.has(num)) {
      result1.push(num);
    }
  }

  for (const num of nums2) {
    if (!set1.has(num)) {
      result2.push(num);
    }
  }

  return [result1, result2];
}

// Example usage:
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDistinctIntegers(nums1, nums2);

console.log(result); // Output: [[1, 3], [4, 6]]


// Q5.
function distanceValue(arr1, arr2, d) {
  let distance = 0;

  for (const num1 of arr1) {
    let valid = true;

    for (const num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        valid = false;
        break;
      }
    }

    if (valid) {
      distance++;
    }
  }

  return distance;
}

// Example usage:
const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const result = distanceValue(arr1, arr2, d);

console.log(result); // Output: 2


// Q6.
function findDuplicates(nums) {
  const result = [];

  for (const num of nums) {
    const idx = Math.abs(num) - 1;

    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    } else {
      result.push(Math.abs(num));
    }
  }

  return result;
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const duplicates = findDuplicates(nums);

console.log(duplicates); // Output: [2, 3]


// Q7.
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
}

// Example usage:
const nums = [3, 4, 5, 1, 2];
const minElement = findMin(nums);

console.log(minElement); // Output: 1


// Q8.
function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const counter = {};
  const original = [];

  for (let num of changed) {
    counter[num] = (counter[num] || 0) + 1;
  }

  for (let num of changed) {
    if (num === 0 || counter[num] === 0) {
      continue;
    }

    counter[num]--;
    if (!counter[num]) {
      delete counter[num];
    }

    const half = num / 2;
    if (!counter[half]) {
      return [];
    }

    counter[half]--;
    if (!counter[half]) {
      delete counter[half];
    }

    original.push(half);
  }

  return original;
}

// Example usage:
const changed = [1, 3, 4, 2, 6, 8];
const originalArray = findOriginalArray(changed);

console.log(originalArray); // Output: [1, 3, 4]
