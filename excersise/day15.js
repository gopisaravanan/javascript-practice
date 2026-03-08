const arr = [1,2,3,4,5];


Array.prototype.myMap = function (cb) {
    let result = [];
    
    for(let i = 0; i < this.length; i++){
        result.push(cb(this[i], i, this))
    }
    
    return result;
}

console.log(arr.myMap((val) => val * 2))


// filter polyfillß

const arr1 = [2,3,4,5,6];

Array.prototype.myFilter = function (cb) {
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result;
    
}

const findEven = (arr1) => {
    return arr1.myFilter((val) => val % 2 === 0)
    
}

console.log(findEven(arr1))