// Muc tieu: cho 2 so a, b
// a. In ra tong a - b
// b. In ra tong (a - b) * 2

// C1: 
function calSum(a, b) {
  console.log(a-b);
}

calSum(2, 5);
calSum(5, 5);

function calSumB(a, b) {
  console.log((a - b) * 2)
}

calSumB(2, 5);
calSumB(5, 5);

// C2:
function calSumNew(a, b) {
  return a - b;
}

const result1 = calSumNew(2, 5);
const result2 = calSumNew(5, 5);

console.log(calSumNew(2, 5));
console.log(result2);
console.log(result1 *2);
console.log(result2 *2);