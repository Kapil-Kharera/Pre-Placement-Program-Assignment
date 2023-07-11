//Assignment-2

//Q.1
function arrayPairSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}

// Example usage:
let nums = [1, 4, 3, 2];
let maximizedSum = arrayPairSum(nums);

console.log(maximizedSum); // Output: 4


//Q2.
function maxCandies(candyType) {
  const uniqueCandies = new Set();

  for (let candy of candyType) {
    uniqueCandies.add(candy);
  }

  return Math.min(uniqueCandies.size, candyType.length / 2);
}

// Example usage:
const candyType = [1, 1, 2, 2, 3, 3];
const maxTypesOfCandies = maxCandies(candyType);

console.log(maxTypesOfCandies); // Output: 3


// Q3.
function findLHS(nums) {
  const frequencyMap = new Map();
  
  // Step 1: Count the frequency of each number in the array
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let maxLen = 0;

  // Step 2: Find the length of the longest harmonious subsequence
  for (let [num, frequency] of frequencyMap.entries()) {
    if (frequencyMap.has(num + 1)) {
      const currentLen = frequency + frequencyMap.get(num + 1);
      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
}

// Example usage:
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const longestSubsequenceLength = findLHS(nums);

console.log(longestSubsequenceLength); // Output: 5


// Q4.
function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&                        // Check if the current plot is empty
      (i === 0 || flowerbed[i - 1] === 0) &&        // Check if the previous plot is empty or it's the first plot
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // Check if the next plot is empty or it's the last plot
    ) {
      flowerbed[i] = 1;   // Plant a flower in the current plot
      count++;            // Increment the count of planted flowers
    }
    
    if (count >= n) {
      return true;   // Return true if we have planted enough flowers
    }
    
    i++;   // Move to the next plot
  }

  return false;   // Return false if we couldn't plant enough flowers
}



// Q5.
function maximumProduct(nums) {
  nums.sort((a, b) => a - b);

  const product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  const product2 = nums[0] * nums[1] * nums[nums.length - 1];

  return Math.max(product1, product2);
}

// Example usage:
const nums = [1, 2, 3];
const maxProduct = maximumProduct(nums);

console.log(maxProduct); // Output: 6


// Q6.
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Found the target, return its index
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

const index = search(nums, target);

console.log(index); // Output: 4


// Q7.
function isMonotonic(nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

// Example usage:
const nums = [1, 2, 2, 3];
const isMonotonicArray = isMonotonic(nums);

console.log(isMonotonicArray); // Output: true



// Q8.
function minimumScore(nums, k) {
  let minVal = Infinity;
  let maxVal = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  const initialScore = maxVal - minVal;

  if (k >= initialScore) {
    return 0;
  } else {
    const potentialMinScores = [
      maxVal - k - (minVal + k),
      maxVal - (minVal - k)
    ];
    return Math.min(...potentialMinScores);
  }
}

// Example usage:
const nums = [1];
const k = 0;
const minScore = minimumScore(nums, k);

console.log(minScore); // Output: 0

