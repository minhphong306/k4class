const string_slugify = function (str1) {
  let result = "";
  for (let i = 0; i<str1.length; i++) {
    const character = str1.charAt(i);
    if (character === " ") {
      result += "-"
    } else if (character >= 'a' && character <= 'z') {
      result += character.toLocaleLowerCase();
    } else if (character >= 'A' && character <= 'Z') {
      result += character.toLocaleLowerCase();
    }
  }
  
  return result;
};

console.log(string_slugify("Robin Singh from USA."));