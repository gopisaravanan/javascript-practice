// reversestring

const str = "hello";

const reverseStr = (str) => {
  let text = "";
  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text;
};

console.log(reverseStr(str));

// char freqency
// const str = "javascript";

const charFreq = (str) => {
  const map = {};
  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
};

console.log(charFreq(str));

// palindrome
// check palindrome

// const str = 'madam';

const checkPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(checkPalindrome(str));

// Remove duplicates
const arr = [1, 2, 2, 3, 4];

const removeDuplicates = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(removeDuplicates(arr));

const txt = "abbccdd";

const nonRepeating = (txt) => {
  const map = {};
  for (let ch of txt) {
    map[ch] = (map[ch] || 0) + 1;
  }

  console.log(map);

  for (let ch of txt) {
    if (map[ch] === 1) {
      return ch;
    }
  }
  return null;
};

console.log(nonRepeating(txt));
