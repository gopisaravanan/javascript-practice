
// closure
const outer =() => {
    count = 0;
    return () => {
        return count ++
    }
}

const inner = outer()
console.log(inner())
console.log(inner())
console.log(inner())
