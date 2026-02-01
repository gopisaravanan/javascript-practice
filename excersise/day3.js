// two sum - brute force
const arr = [2,3,5,6,7]
const target = 11;

const twoSum = (arr, target) => {
    for(let i =0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(twoSum(arr, target))