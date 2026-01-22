
const outer = () => {
    let count = 0;
    
    return inner = () => {
        count ++
        console.log(count)
    }
}

const fn = outer();
fn()
fn()

// Output:
// 1
// 2