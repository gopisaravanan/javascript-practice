const str = "How are you doing today?";

console.log(str.split(" "))
// Output:
// [ 'How', 'are', 'you', 'doing', 'today?' ]

const months = "Jan,Feb,Mar,Apr,May,Jun";

console.log(months.split(','))

// Output:
// [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]

const myString = "Hello World. How are you?";

console.log(myString.split(" ", 3));

// Output:
// [ 'Hello', 'World.', 'How' ]