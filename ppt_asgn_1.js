//Q1.

function twoSum(nums, target) {
    const complementMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
  
      if (complementMap.hasOwnProperty(complement)) {
        return [complementMap[complement], i];
      }
  
      complementMap[num] = i;
    }
  
    // No solution found
    return [];
  }

  console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
  console.log(twoSum([3, 3], 6)); // Output: [0, 1]


//Q2.
function removeElement(nums, val) {
    let slow = 0;
  
    for (let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== val) {
        // Swap elements
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        slow++;
      }
    }
  
    return slow;
  }
  
  
  const nums = [3,4,4,4,4,4,4,3,4,4];
  const val = 4;
  
  const k = removeElement(nums, val);
  console.log(k);
  console.log(nums);


//Q3.
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // console.log("right pointer value : ", right);
    
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    return left;
}

const nums = [1, 0, 2, 2, 1];
const target = 5;

const result = searchInsert(nums, target);
console.log(result);

//Q.4

function plusOne(digits) {
    const n = digits.length;
    let carry = 1;
    
    for (let i = n - 1;i >= 0;i--) {
        const sum = digits[i] + carry;
        
        if(sum >= 10) {
            digits[i] = sum % 10;
            carry = 1;
        }else {
            digits[i] = sum;
            carry = 0;
        }
    }
    
    if (carry === 1) {
        digits.unshift(1);
    }
    
    return digits;
}

const digits = [9,9,9];
const result = plusOne(digits);
console.log(result);

//Q5.

function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
  
    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }
  
    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p--;
      p2--;
    }
  }
  
  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  
  merge(nums1, m, nums2, n);
  console.log("Merged Array : ", nums1);

  //Q.6

  function containDuplicate(nums) {
    const numSet = new Set();
    
    for (let num of nums) {
        if (numSet.has(num)) {
            return true
        }else {
            numSet.add(num);
        }
    }
    
    return false;
}

const nums = [1, 2, 3, 4, 5];
console.log(containDuplicate(nums));

const numsD = [1, 2, 3, 2, 4, 5];
console.log(containDuplicate(numsD));

//Q.7

function moveZeroes(nums) {
    let slow = 0;
    
    for (let fast = 0;fast < nums.length;fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }
}

const nums = [0, 1, 0, 3, 0, 12];
moveZeroes(nums);
console.log(nums);

//Q.8

function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate, missing;
    
    for (const num of nums) {
        if (numSet.has(num)) {
            duplicate = num;
        }
        
        numSet.add(num);
    }
    
    for (let i = 1;i <= nums.length + 1;i++) {
        if (!numSet.has(i)) {
            missing = i;
            break;
        }
    }
    
    return [duplicate, missing];
}

const nums = [1, 2, 3, 4, 5, 5, 7, 8, 9];
const result = findErrorNums(nums);
console.log(result);

  
  
  