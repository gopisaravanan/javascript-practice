const arr = [1,2,3,4]

Array.prototype.myFilter = function(cb) {
    const result = [];
    for(let i =0; i < this.length; i++){
        if(cb(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
}


const filtered = arr.myFilter(val => val % 2 === 0)

console.log(filtered)

// Output:
// [ 2, 4 ]