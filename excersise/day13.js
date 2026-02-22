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

// two sum 
// const arr = [2,4,6,7,8,3]
const target = 6;

const twoSum = (arr, target) => {
   const map = new Map();
   
   for(let i =0; i< arr.length; i++){
       let diff = target - arr[i]
       if(map.has(diff)){
           return [map.get(diff), i]
       }
       map.set(arr[i], i)
   }
    
}

console.log(twoSum(arr, target))

