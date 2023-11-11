// Define the countSheep function with a parameter 'num'
var countSheep = function (num) {
    // Initialize an empty string to store the result
    let result = "";
  
    // Use a loop to iterate from 1 to the given number 'num'
    for (let i = 1; i <= num; i++) {
      // Concatenate the current number and "sheep..." to the result string
      result += `${i} sheep...`;
    }
  
    // Return the final result
    return result;
  }
  
  // Sample tests
  console.log(countSheep(0)); // Output: ""
  console.log(countSheep(1)); // Output: "1 sheep..."
  console.log(countSheep(2)); // Output: "1 sheep...2 sheep..."
  console.log(countSheep(3)); // Output: "1 sheep...2 sheep...3 sheep..."
  