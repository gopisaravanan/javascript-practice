
// closure
const outer =() => {
    count = 0;
    return () => {
        return count ++
    }
}

const inner = outer()
console.log(inner())
console.log(inner())
console.log(inner())


// array polyfill
const arr = [1,2,3,4]

Array.prototype.myMap = function (cb){
    let result = [];
    for(let i =0; i < this.length ; i++){
        result.push(cb(this[i], i, this))
    }
    return result;

}

console.log(arr.myMap(val => val * 2))