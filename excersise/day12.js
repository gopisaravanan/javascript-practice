// Binary search
const arr = [1,2,3,4,5,6,7,8];
const target = 7;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target) {
            return mid;
        }else if(arr[mid] <= target){
            left = mid+1
        }else{
            right = mid - 1;
        }
    }
    return -1;
    
}

console.log(binarySearch(arr, target))



// map polyfill

// const arr = [1,2,3,4];

Array.prototype.myMap = function(cb){
    let result = [];
    for(let i =0; i< this.length; i++){
        result.push(cb(this[i], i, this))
    }
    return result;
}

console.log(arr.myMap(val => val * 2))

// forEach polyfill

const arr = [1,2,3,4];

Array.prototype.myForEach = function(cb){
    for(let i =0; i< this.length; i++){
        cb(this[i], i, this)
    }
}

arr.myForEach((val) => {
    console.log(val * 2)
})

// closure

const outer = function () {
    let count = 0;
    return function (){
        count ++
        return count;
    }
}

const inner = outer();
console.log(inner())
console.log(inner())

// find missing numbers

const arr = [1,4,6,3,7]

const findMissingNumbers = (arr) => {
    let max = Math.max(...arr);
    let set = new Set(arr);
    let missing = [];

    for (let i = 1; i <= max; i++) {
        if (!set.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}


console.log(findMissingNumbers(arr))