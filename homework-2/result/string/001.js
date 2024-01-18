const chuoiKiemtra = "ABC";
const chuoiKiemtra1 = "";
const chuoiKiemtra2 = true;
const chuoiKiemtra3 = null;

if (typeof chuoiKiemtra === "string") {
  console.log("chuoi kiem tra La string")
} else {
  console.log("chuoi kiem tra Khong phai string");
}

if (typeof chuoiKiemtra1 === "string") {
  console.log("chuoi kiem tra 1 La string")
} else {
  console.log("chuoi kiem tra 1 Khong phai string");
}

function is_string(str) {
  let result = true;
  if (typeof str === "string") {
    return true;
  } else {
    result = false;
  }

  return result;
}

console.log(is_string("ABC"));
console.log(is_string(""));
console.log(is_string(true));
console.log(is_string(null));