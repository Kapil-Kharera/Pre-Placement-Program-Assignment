// Assignment-7

// Q1.
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap.has(sChar)) {
      if (sMap.get(sChar) !== tChar) {
        return false;
      }
    } else {
      sMap.set(sChar, tChar);
    }

    if (tMap.has(tChar)) {
      if (tMap.get(tChar) !== sChar) {
        return false;
      }
    } else {
      tMap.set(tChar, sChar);
    }
  }

  return true;
}

// Example usage:
const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);

console.log(result);
// Output: true


// Q2.
function isStrobogrammatic(num) {
  const strobogrammaticMap = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftDigit = num[left];
    const rightDigit = num[right];

    if (!strobogrammaticMap.has(leftDigit) || strobogrammaticMap.get(leftDigit) !== rightDigit) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Example usage:
const num = "69";
const result = isStrobogrammatic(num);

console.log(result);
// Output: true


// Q3.
function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}

// Example usage:
const num1 = "11";
const num2 = "123";
const result = addStrings(num1, num2);

console.log(result);
// Output: "134"


// Q4.
function reverseWords(s) {
  const words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }

  return words.join(' ');
}

// Example usage:
const s = "Let's take LeetCode contest";
const reversed = reverseWords(s);

console.log(reversed);
// Output: "s'teL ekat edoCteeL tsetnoc"


// Q5.
function reverseStr(s, k) {
  const chars = s.split('');

  for (let i = 0; i < chars.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);

    while (start < end) {
      const temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
  }

  return chars.join('');
}

// Example usage:
const s = "abcdefg";
const k = 2;
const reversed = reverseStr(s, k);

console.log(reversed);
// Output: "bacdfeg"


// Q6.
function canShiftString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  const doubledS = s + s;
  return doubledS.includes(goal);
}

// Example usage:
const s = "abcde";
const goal = "cdeab";
const canShift = canShiftString(s, goal);

console.log(canShift);
// Output: true


// Q7.
function processString(str) {
  const stack = [];

  for (let char of str) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

function backspaceCompare(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

// Example usage:
const s = "ab#c";
const t = "ad#c";
const areEqual = backspaceCompare(s, t);

console.log(areEqual);
// Output: true


// Q8.
function checkStraightLine(coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const initialSlope = getSlope(x0, y0, x1, y1);

  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    const [xiMinus1, yiMinus1] = coordinates[i - 1];
    const currentSlope = getSlope(xiMinus1, yiMinus1, xi, yi);

    if (currentSlope !== initialSlope) {
      return false;
    }
  }

  return true;
}

function getSlope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

// Example usage:
const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
const isStraightLine = checkStraightLine(coordinates);

console.log(isStraightLine);
// Output: true
