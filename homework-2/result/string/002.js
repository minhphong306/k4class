function is_blank(str) {
  if (str === "") {
    return true;
  }

  return false;
}

console.log(is_blank(""));
console.log(is_blank("abc"));
console.log(is_blank(true));
console.log(is_blank(1.5));