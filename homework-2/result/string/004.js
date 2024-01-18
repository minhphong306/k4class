const truncate_string = function (str1, length) {
  return str1.slice(0, length);
};

console.log(truncate_string("Robin Singh", 4));
console.log(truncate_string("Robin Singh", 5));