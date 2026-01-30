// reversestring

const str = "hello";

const reverseStr = (str) => {
    let text = '';
    for(let i = str.length - 1; i >= 0; i--){
        text += str[i]
    }
    return text;
}

console.log(reverseStr(str))

// char freqency
// const str = "javascript";

const charFreq = (str) => {
    const map = {};
    for(let ch of str) {
        map[ch] = (map[ch] || 0) + 1
    }
    return map;
}

console.log(charFreq(str))