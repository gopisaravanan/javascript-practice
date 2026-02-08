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

// map polyfill

const arr = [1,2,3,4]

Array.prototype.myMap = function(cb){
    let result = [];
    for(let i =0; i < this.length; i++){
        result.push(cb(this[i],this,i))
    }
    return result;
}

console.log(arr.myMap((val) =>  val * 2))

// filter

// const arr = [1,2,3,4]

Array.prototype.myFilter = function (cb) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], this, i)){
            result.push(this[i])
        }
    }
    return result;
}

console.log(arr.myFilter((val) =>  val > 2))