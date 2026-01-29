// ## 1️⃣ Reverse a String

const str = "javascript";

const reverse = (str) => {
  let text = "";
  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text;
};

console.log(reverse(str));

// 2.Check Palindrome
const string = "madam";

const checkPalindrome = (string) => {
  const text = string.toLowerCase();
  return text.split("").reverse().join("") === string;
};

console.log(checkPalindrome(string));

// 3.Count Character Occurrences (Frequency Count)
const ip = "javascript";
const charCount = (ip) => {
  let map = {};
  for (let char of ip) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};

console.log(charCount(ip));

//4. Remove Duplicates from Array
const arr = [1, 2, 2, 3, 4];

const removeDuplicates = () => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(removeDuplicates());

// 5. Flatten an Array
const array = [1, [2, [3, [4]], 5]];

console.log(array.flat());
console.log(array.flat(Infinity));

//6. First Non-Repeating Character
const txt = "aabbccdd";

const firstNonRepeatingChar = (txt) => {
  const count = {};
  for (let ch of txt) {
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let ch of txt) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
};

console.log(firstNonRepeatingChar(txt));

// 7. Closure - count
const createCounter = () => {
    let count =0;
    
    return () => {
        count++
        return count
    }
}

const innerFunc = createCounter()
console.log(innerFunc())
console.log(innerFunc())
