// [1, 2, 3] =>  "+"
// [-1, 2, 3] => "-"
// [-1, 2, -1] => "+"

function checkDau(a, b, c) {
  const result = a * b * c;
  if (result >= 0) {
    return "+";
  }

  return "-";
}

console.log(checkDau(1, 2, 3));
console.log(checkDau(-1, 2, 3));
console.log(checkDau(-1, 2, -3));