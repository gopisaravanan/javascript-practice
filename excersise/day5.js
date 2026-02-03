
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

// bubblesort

// const arr = [5,3,7,2,9,1]

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
        return arr;
    
}


console.log(bubbleSort(arr))