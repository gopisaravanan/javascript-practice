// char freq

const str = 'javascript';

const freq = (str) => {
  const map = {};
  
  for(ch of str){
    map[ch] = (map[ch] || 0) + 1
  }
  
  return map
}

console.log(freq(str))