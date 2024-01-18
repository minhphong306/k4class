function is_string(input) {
    const inputType = typeof input === "string";
    return inputType;
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));