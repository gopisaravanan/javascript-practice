// Binary search

const arr = [ 2, 3, 7, 11, 15, 25]

const target = 7;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length-1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    
    return -1
    
}

console.log(binarySearch(arr, target))

// removeDuplicates

// const arr = [1, 2, 2, 3, 4,5,4,4,2];


const removeDuplicates = (arr) => {
    const result = [];
    for(let i= 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    
    return result;
    
    
}

console.log(removeDuplicates(arr))