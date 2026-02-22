// Missing number in array

const arr = [1,2,3,9,8,7,6];

const missingNumbers = (arr) => {
    let max = Math.max(...arr);
    let set = new Set(arr)
    let missing = [];
    
    for(let i =1; i <= max; i++){
        if(!set.has(i)){
            missing.push(i)
        }
    }
    return missing;
}

console.log(missingNumbers(arr))