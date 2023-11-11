function createHelloWorld() {
    // Inside createHelloWorld, we define a new function that takes any number of arguments using the rest parameter syntax  ...args).
    // However, we don't use these arguments; instead, we return "Hello World" regardless of what was passed.
    return function(...args) {
      return "Hello World";
    };
  }
  
  // Example 1
  const f1 = createHelloWorld();
  console.log(f1());  // Output: "Hello World"
  
  // Example 2
  const f2 = createHelloWorld();
  console.log(f2({}, null, 42));  // Output: "Hello World"
  