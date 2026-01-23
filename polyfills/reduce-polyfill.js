const arr = [1,2,3,4]

Array.prototype.myReduce = function (cb, initialVal) {
    let accumulator = initialVal;
    let startIndex = 0;
    
    if(initialVal === undefined) {
        accumulator = this[0]
        startIndex = 1
    }
    
    for(let i = startIndex; i < this.length; i++){
       accumulator =  cb(accumulator, this[i],i,this)
    }
    
    return accumulator;
    
    
}

// const result = arr.myReduce((acc,curr) => (acc+curr),2)
const result = arr.myReduce((acc,curr) => (acc+curr))

console.log(result)

// Output:
// 10