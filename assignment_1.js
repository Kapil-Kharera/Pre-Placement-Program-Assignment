//Q1. Move Zeros

function moveZeroes(nums) {
  let left = 0; 
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  while (left < nums.length) {
    nums[left] = 0;
    left++;
  }

  return nums;
}

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums)); 


//Q2. First unique character in a string

function firstUniqChar(s) {
  const charFrequency = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (charFrequency.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; 
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode")); 
console.log(firstUniqChar("aabb")); 

