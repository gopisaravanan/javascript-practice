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