// Assignment-11


// Q1.
function mySqrt(x) {
  if (x === 0) return 0;

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

// Test the function
const x = 4;
const sqrt = mySqrt(x);
console.log(sqrt);


// Q2.
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

// Test the function
const nums = [1, 2, 3, 1];
const peakIndex = findPeakElement(nums);
console.log(peakIndex);


// Q3.
function missingNumber(nums) {
  const n = nums.length;
  let missing = n;

  for (let i = 0; i < n; i++) {
    missing ^= i ^ nums[i];
  }

  return missing;
}

// Test the function
const nums = [3, 0, 1];
const missingNum = missingNumber(nums);
console.log(missingNum);


// Q4.
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Find the intersection point of the two pointers
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Find the entry point of the cycle (repeated number)
  let ptr1 = nums[0];
  let ptr2 = slow;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}

// Test the function
const nums = [1, 3, 4, 2, 2];
const repeatedNum = findDuplicate(nums);
console.log(repeatedNum);


// Q5.
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (const num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

// Test the function
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const intersectionArray = intersection(nums1, nums2);
console.log(intersectionArray);


// Q6.
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// Test the function
const nums = [3, 4, 5, 1, 2];
const minElement = findMin(nums);
console.log(minElement);


// Q7.
function searchRange(nums, target) {
  const leftIndex = findIndex(nums, target, true);
  const rightIndex = findIndex(nums, target, false);

  return [leftIndex, rightIndex];
}

function findIndex(nums, target, leftmost) {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      index = mid;
      if (leftmost) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return index;
}

// Test the function
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);
console.log(result);


// Q8.
function intersect(nums1, nums2) {
  const map1 = countOccurrences(nums1);
  const map2 = countOccurrences(nums2);
  const result = [];

  for (const [num, count] of map1) {
    if (map2.has(num)) {
      const intersectionCount = Math.min(count, map2.get(num));
      for (let i = 0; i < intersectionCount; i++) {
        result.push(num);
      }
    }
  }

  return result;
}

function countOccurrences(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
}

// Test the function
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersect(nums1, nums2);
console.log(result);
