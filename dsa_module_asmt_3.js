// Assignmet-3

// Q1.
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return target; // Found an exact sum, return it
      }
    }
  }

  return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSumClosest(nums, target);

console.log(closestSum); // Output: 2



// Q2.
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate elements for nums[i]
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue; // Skip duplicate elements for nums[j]
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++; // Skip duplicate elements for nums[left]
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--; // Skip duplicate elements for nums[right]
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const quadruplets = fourSum(nums, target);

console.log(quadruplets);
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]



// Q3.
function nextPermutation(nums) {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start) {
  let left = start;
  let right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}

// Example usage:
const nums = [1, 2, 3];
nextPermutation(nums);

console.log(nums); // Output: [1, 3, 2]



// Q4.
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
const index = searchInsert(nums, target);

console.log(index); // Output: 2


// Q5.
function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;

    if (sum < 10) {
      digits[i] = sum;
      return digits;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
}

// Example usage:
const digits = [1, 2, 3];
const result = plusOne(digits);

console.log(result); // Output: [1, 2, 4]


// Q6.
function singleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}

// Example usage:
const nums = [2, 2, 1];
const single = singleNumber(nums);

console.log(single); // Output: 1



// Q7.
function findMissingRanges(nums, lower, upper) {
  const result = [];
  let start = lower;

  for (let num of nums) {
    if (num > start) {
      result.push(getRange(start, num - 1));
    }
    start = num + 1;
  }

  if (start <= upper) {
    result.push(getRange(start, upper));
  }

  return result;
}

function getRange(start, end) {
  if (start === end) {
    return `${start}`;
  } else {
    return `${start}->${end}`;
  }
}

// Example usage:
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const missingRanges = findMissingRanges(nums, lower, upper);

console.log(missingRanges);
// Output: [[2,2],[4,49],[51,74],[76,99]]


// Q8.
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const intervals = [[0, 30], [5, 10], [15, 20]];
const canAttend = canAttendMeetings(intervals);

console.log(canAttend); // Output: false
