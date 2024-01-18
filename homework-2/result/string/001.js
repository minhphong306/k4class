function is_string(str) {
  if (typeof str === "string") {
    return true;
  }

  return false;
}

console.log(is_string("ABC"));
console.log(is_string(""));
console.log(is_string(true));
console.log(is_string(null));