const arr1 = [
{
    id:1,
    name: 'Gopi',
    salary:'50000'
},{
    id:2,
    name: 'Saravanan',
    salary:'60000'
},
]

const arr2 = [{
    id:1,
    salary: '90000'
}]

const checkSalaryUpdate = arr1.map((val) => {
    const matched = arr2.find((value) => value.id === val.id)
    if(matched){
        return {...val, salary: matched.salary}
    }
    return val
})


console.log(checkSalaryUpdate)


// max freq
const str = 'aaabbbcccdddaaa';

const maxFreqChar = (str) => {
    const map = {};

    // build frequency map
    for (let ch of str) {
        map[ch] = (map[ch] || 0) + 1;
    }

    // find max occurring character
    let maxChar = '';
    let maxCount = 0;

    for (let key in map) {
        if (map[key] > maxCount) {
            maxCount = map[key];
            maxChar = key;
        }
    }

    return { char: maxChar, count: maxCount };
};

console.log(maxFreqChar(str));
