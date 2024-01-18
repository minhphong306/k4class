if (typeof test2 === "string") { // Dieu kien
  console.log("test2 la string") // testName
} else {
  console.log("test2 khong phai la string")
}

function printResult(condition, testName) {
  if (condition === true) {
    console.log(`${testName} is string`);
  } else {
    console.log(testName + " is not string");
  }
}