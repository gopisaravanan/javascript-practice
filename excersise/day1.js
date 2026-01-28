// ## 1️⃣ Reverse a String

const str = "javascript";

const reverse = (str) => {
    let text = '';
    for(let i = str.length -1; i >= 0; i--){
        text += str[i]
    }
    return text;
}

console.log(reverse(str));


// 2.Check Palindrome
const string = "madam"

const checkPalindrome = (string) =>{
    const text = string.toLowerCase()
    return text.split('').reverse().join('') === string;
    
}

console.log(checkPalindrome(string))

// 3.Count Character Occurrences (Frequency Count)
const ip = "javascript";
const charCount = (ip) => {
    let map = {}
    for (let char of ip){
        map[char] = (map[char] || 0) + 1
    }
    return map
}

console.log(charCount(ip))

//