// 2 cach: dung ham, ko dung ham
// Test voi 4 loai du lieu khac nhau: "ABC",  "", true, null
const test1 = "ABC";
const test2 = "";
const test3 = true;
const test4 = null;


// C1: Khong dung ham
// if (typeof test1 === "string") {
//   console.log("test1 la string")
// } else {
//   console.log("test1 khong phai la string")
// }

// if (typeof test2 === "string") {
//   console.log("test2 la string")
// } else {
//   console.log("test2 khong phai la string")
// }

// if (typeof test3 === "string") {
//   console.log("test3 la string")
// } else {
//   console.log("test3 khong phai la string")
// }

// if (typeof test4 === "string") {
//   console.log("test4 la string")
// } else {
//   console.log("test4 khong phai la string")
// }

// Case: 4 kieu viet
// camelCase <- chung ta dung kieu nay 
// PascalCase
// snake_case (underscore_case)
// kebab-case

// C2: Dung ham
function isString(str) {
  if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
}

function printResult(condition, testName) {
  if (condition === true) {
    console.log(`${testName} is string`);
  } else {
    console.log(testName + " is not string");
  }
}

// Khai bao bang const
const printResult2 = function(condition, testName) {
  // ....
}

// Arrow function
const printResult3 = (condition, testName) => {
  // ...
}

const isTest1Str = isString(test1); // isString("ABC")
const isTest2Str = isString(test2);
const isTest3Str = isString(test3);
const isTest4Str = isString(test4);

printResult(isTest1Str, 'test1');
printResult(isTest2Str, "test2");
printResult(isTest3Str, `test3`); // backtick
printResult(isTest4Str, 'test4');

printResult2(isString, 'test1');