// Function to clone an array
const array_Clone = function(arra1) {
  // Using the slice method to create a shallow copy of the input array
  return arra1.slice(0);
};

// Testing the function with an array
console.log(array_Clone([1, 2, 4, 0]));

// Testing the function with an array containing nested arrays
console.log(array_Clone([1, 2, [4, 0]]));
