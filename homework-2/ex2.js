function is_blank(input) {
    if (input === "") {
        return true;
    }

    return false;
}

console.log(is_blank(''));
console.log(is_blank('abc'));