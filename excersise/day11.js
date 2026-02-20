// Binary search

const arr = [1,2,3,4,5,6,7,8];
const target = 1;
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if(arr[mid] === target){
          return mid
      }else if(arr[mid] < target){
          left = mid + 1
      }else {
          right = mid -1
      }
  }
 
};

console.log(binarySearch(arr, target))

// reverse string

const str = 'hello';

const reverseStr = (str) => {
    let text = '';
    for(let i = str.length-1 ; i >= 0; i-- ){
        text += str[i]
    }
    return text;
    
}

console.log(reverseStr(str));


// remove duplicates

// const str = 'abcabcbb'

const removeDuplicate = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result.push(str[i])
        }
    }
    return result.join('');
}


console.log(removeDuplicate(str))

// bubble sort

// const arr = [5,3,4,1,2,6];

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
        return arr;
    
}

console.log(bubbleSort(arr))

// palindrome 

// const str = 'madam';

const checkPalindrome = (str) => {
    let text = str.split('').reverse().join('')
    return text === str

}

console.log(checkPalindrome(str))