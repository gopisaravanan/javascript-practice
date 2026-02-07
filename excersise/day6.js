const arr1 = [1,2,3,4,];
const arr2 = [3,4,5,6];


const mergedArr = [...arr1,...arr2];

const removeDuplicate = (mergedArr) => {
    const result = [];
    for(let i = 0; i < mergedArr.length; i++){
        if(!result.includes(mergedArr[i])){
            result.push(mergedArr[i])
        }
    }
    return result;

}

console.log(removeDuplicate(mergedArr))

const str = 'madam';

const checkPalindrome = (str) => {
    const text = str.split('').reverse().join('');
    return text === str;
    
}

console.log(checkPalindrome(str))
