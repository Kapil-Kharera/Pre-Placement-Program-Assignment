// Assignment-8

// Q1.
function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  // Create a 2D table to store the minimum ASCII sum
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Calculate the minimum ASCII sum for each subproblem
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }

  return dp[m][n];
}

// Example usage:
const s1 = "sea";
const s2 = "eat";
const lowestASCIISum = minimumDeleteSum(s1, s2);

console.log(lowestASCIISum);
// Output: 231


// Q2.
function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '*') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.includes('(')) {
        stack.pop();
      } else if (stack.includes('*')) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  while (stack.length > 0) {
    if (stack.pop() !== '(' && stack.pop() !== '*') {
      return false;
    }
  }

  return true;
}

// Example usage:
const s = '()';
const isValidString = isValid(s);

console.log(isValidString);
// Output: true


// Q3.
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

// Example usage:
const word1 = "sea";
const word2 = "eat";
const minSteps = minDistance(word1, word2);

console.log(minSteps);
// Output: 2


// Q4.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(s, i) {
  if (i >= s.length || s[i] === ')') {
    return null;
  }

  let num = '';
  while (i < s.length && !isNaN(s[i])) {
    num += s[i];
    i++;
  }

  const node = new TreeNode(parseInt(num));
  if (i < s.length && s[i] === '(') {
    node.left = buildTree(s, i + 1);
    i++; // Skip the closing parenthesis
  }
  if (i < s.length && s[i] === '(') {
    node.right = buildTree(s, i + 1);
    i++; // Skip the closing parenthesis
  }

  return node;
}

function str2tree(s) {
  return buildTree(s, 0);
}

// Example usage:
const s = '4(2(3)(1))(6(5))';
const root = str2tree(s);

console.log(root);


// Q5.
function compress(chars) {
  let write = 0;
  let read = 0;
  let count = 1;

  for (read = 1; read <= chars.length; read++) {
    if (read < chars.length && chars[read] === chars[read - 1]) {
      count++;
    } else {
      chars[write] = chars[read - 1];
      write++;

      if (count > 1) {
        const countStr = count.toString();
        for (let i = 0; i < countStr.length; i++) {
          chars[write] = countStr[i];
          write++;
        }
      }

      count = 1;
    }
  }

  return write;
}

// Example usage:
const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const newLength = compress(chars);

console.log(newLength);
console.log(chars.slice(0, newLength));


// Q.6
function findAnagrams(s, p) {
  const result = [];
  const pFreq = new Map();
  const windowFreq = new Map();

  for (let char of p) {
    pFreq.set(char, (pFreq.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[right];
    windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
    right++;

    if (right - left > p.length) {
      const leftChar = s[left];
      if (windowFreq.get(leftChar) === 1) {
        windowFreq.delete(leftChar);
      } else {
        windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
      }
      left++;
    }

    if (isMapsEqual(pFreq, windowFreq)) {
      result.push(left);
    }
  }

  return result;
}

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

// Example usage:
const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);

console.log(indices);


// Q7.
function decodeString(s) {
  const stack = [];
  
  for (let c of s) {
    if (c === ']') {
      let substring = '';
      let repeatTimes = '';

      while (stack.length && stack[stack.length - 1] !== '[') {
        substring = stack.pop() + substring;
      }

      stack.pop(); // Pop '[' from the stack

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        repeatTimes = stack.pop() + repeatTimes;
      }

      substring = substring.repeat(Number(repeatTimes));
      stack.push(substring);
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
}

// Example usage:
const s = "3[a]2[bc]";
const decodedString = decodeString(s);

console.log(decodedString);


// Q8.
function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal && new Set(s).size < s.length) {
    return true;
  }

  const diffS = [];
  const diffGoal = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffS.push(i);
      diffGoal.push(i);
    }
  }

  if (diffS.length !== 2 || s[diffS[0]] !== goal[diffGoal[1]] || s[diffS[1]] !== goal[diffGoal[0]]) {
    return false;
  }

  return true;
}
