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

