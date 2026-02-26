const arr = [4,3,5,6,1,9];

const bubbleSort = (arr) => {
    for(let i =0; i < arr.length; i++){
        for(let j =0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    return arr;
    
}

console.log(bubbleSort(arr));


const arr1 = [ 1, 3, 4, 5, 6, 9 ]
const target = 6;
const binarySearch = (arr1, target) => {
    let left = 0;
    let right = arr1.length -1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr1[mid] === target){
            return mid
        } else if(arr1[mid] <= target){
            left = mid + 1
        }else {
            right = mid -1
        }
        
    }
    
}

console.log(binarySearch(arr1, target))

// removeDuplicates

// const arr = [2,3,4,5,2,3,4,1];


const removeDuplicates = (arr) => {
    const result = [];
    
    for(let i =0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    
    return result;
    
}

console.log(removeDuplicates(arr))