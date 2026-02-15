// first non repeat

const txt = "aabbccd";

const firstNonRepeating = (txt) => {
  const map = {};
  for (ch of txt) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (ch of txt) {
    if (map[ch] === 1) {
      return ch;
    }
  }

  return null;
};

console.log(firstNonRepeating(txt));

// Closure

function outer () {
    let count = 0;
    return function inner () {
    count++
    return count
    }
}

const counter = outer()
console.log(counter())
console.log(counter())

// Char Freq
const str = 'javascript';

const freq = (str)=> {
    const map = {};
    
    for (let ch of str){
        map[ch] = (map[ch] || 0) + 1
    }
    
    return map;
}

console.log(freq(str))

// 2nd max
const arr = [5, 3, 9, 7, 9] 

const secondMax = (arr) => {
    const unique = [...new Set(arr)]
    unique.sort((a,b) => b-a)
    return unique[1] || null
    
}

console.log(secondMax(arr))

// findMax val

// const arr = [5, 3, 9, 7, 10] 

const findMaxVal = (arr) => {
    let maxVal = arr[0]
    
    for(let i =1; i < arr.length; i++ ){
        if(arr[i] > maxVal){
            maxVal = arr[i]
        }
    }
    return maxVal
}

console.log(findMaxVal(arr))