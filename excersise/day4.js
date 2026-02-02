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

// check freq
// const str = 'javascript';

const checkfreq = (str) => {
    const map ={};
    for(let ch of str) {
        map[ch] = (map[ch] || 0 ) + 1
    }
    return map;
    
}

console.log(checkfreq(str))


// Flattern Array
const arr = [2,4,6,[3,7,[9,8]]]

console.log(arr.flat())
console.log(arr.flat(Infinity))

// Remove duplicates


// const arr = [1, 2, 2, 3, 4,4];
const removeDuplicates = (arr) => {
    const result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    
    return result;
    
}

console.log(removeDuplicates(arr))