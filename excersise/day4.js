// Reverse str

const str = "hello";

const reverseStr = (str) => {
    let text = '';
    for(let i = str.length -1; i >= 0; i--){
        text += str[i]
    }
    return text;
}

console.log(reverseStr(str))


// check palindrome

const text = "madam";

const checkPalindrome = (text) => {
    return text.split('').reverse().join('') === text;
    
}

console.log(checkPalindrome(text))
