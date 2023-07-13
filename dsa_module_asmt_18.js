// Assignment-18


// Q1.
function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]



// Q2.
function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// Example usage
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]



// Q3.
function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Example usage
const n = 5;
const bad = 4;
console.log(firstBadVersion(n)); // Output: 4



// Q4.
function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  // Find the maximum element in the array
  let max = Math.max(...nums);

  // Perform radix sort on the array
  let exp = 1; // Current digit being considered
  const n = nums.length;
  const sorted = new Array(n).fill(0);

  while (max / exp > 0) {
    const count = new Array(10).fill(0); // Counting array for each digit

    // Count the occurrences of each digit
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(nums[i] / exp) % 10;
      count[digit]++;
    }

    // Calculate the cumulative count for each digit
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build the sorted array based on the digit
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(nums[i] / exp) % 10;
      sorted[count[digit] - 1] = nums[i];
      count[digit]--;
    }

    // Update the original array with the sorted array
    for (let i = 0; i < n; i++) {
      nums[i] = sorted[i];
    }

    exp *= 10;
  }

  // Calculate the maximum gap
  let maxGap = 0;
  for (let i = 1; i < n; i++) {
    maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
  }

  return maxGap;
}

// Example usage
const nums = [3, 6, 9, 1];
console.log(maximumGap(nums)); // Output: 3



// Q5.
function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

// Example usage
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true



// Q6.
function findMinArrowShots(points) {
  if (points.length === 0) {
    return 0;
  }

  // Sort the balloons based on their end points
  points.sort((a, b) => a[1] - b[1]);

  let count = 1; // Number of arrows needed
  let end = points[0][1]; // End point of the current arrow

  // Iterate through the balloons
  for (let i = 1; i < points.length; i++) {
    // If the current balloon starts after the current arrow's end point,
    // we need an additional arrow
    if (points[i][0] > end) {
      count++;
      end = points[i][1];
    }
  }

  return count;
}

// Example usage
const points = [[10, 16], [2, 8], [1, 6], [7, 12]];
console.log(findMinArrowShots(points)); // Output: 2



// Q7.
function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = new Array(n).fill(1); // Initialize dp array with 1s

  // Compute the length of the LIS for each element
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // Find the maximum value in the dp array
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4



// Q8.
function find132pattern(nums) {
  const n = nums.length;
  const stack = [];
  let s3 = -Infinity; // Initialize s3 to negative infinity

  // Iterate the array from right to left
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      // Found a valid 132 pattern
      return true;
    }

    // Remove elements from the stack that are less than nums[i]
    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      s3 = stack.pop();
    }

    // Push nums[i] into the stack as a potential candidate for s2
    stack.push(nums[i]);
  }

  // No 132 pattern found
  return false;
}

// Example usage
const nums = [1, 2, 3, 4];
console.log(find132pattern(nums)); // Output: false
