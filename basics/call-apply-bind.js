function print(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Gopi" };

print.call(user, "Chennai");
print.apply(user, ["Chennai"]);
const boundPrint = print.bind(user, "Chennai");
boundPrint();

// Output:
// Gopi from Chennai
// Gopi from Chennai
// Gopi from Chennai