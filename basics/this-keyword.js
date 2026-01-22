const obj = {
  name: "Gopi",
  greet() {
    console.log(this.name);
  }
};

obj.greet();

// Output:
// Gopi