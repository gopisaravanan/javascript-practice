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

// find max number

const arr1 = [1,2,3,9,8,7,6];

const findMax = (arr1) => {
    let max = arr1[0];
    for(let i = 1; i < arr1.length; i++){
        if(arr1[i] > max){
            max = arr1[i]
        }
    }
    return max;
    
}

console.log(findMax(arr1))