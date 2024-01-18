// function printStar() {
//   let str = "";
//   for (let i = 0; i < 5; i++) {
//     str += "*";
//     console.log(str);
//   }
// }

// printStar();



// str = "";
// i = 0;
// -> str = "* "
// i = 1;
// -> str = "* * "

// i = 2;
// -> str = "* * * "
// i = 3;
// -> str = "* * * * "

// i = 4;
// -> str = "* * * * *"

// ---

// *
// * *
// * * *
// * * * *
// * * * * *

function printStarLoop2() {
  for (let i = 0; i < 6; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "* ";
    }

    console.log(str);
  }
}



function printLoop3() {
  for (let i = 1; i <= 6; i++) {
    if (i === 1) {
      console.log("thao");
    } else if (i === 2) {
      console.log("thao thao");
    } else if (i === 3) {
      console.log("thao thao thao");
    } else if (i === 4) {
      console.log("thao thao thao thao");
    } else if (i === 5) {
      console.log("thao thao thao thao thao");
    } else if (i === 6) {
      console.log("thao thao thao thao thao thao");
    }
  }
}
printLoop3();

function printLoop4() {
  for (let i = 1; i <= 6; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += "thao ";
    }

    console.log(str);
  }
}

--- v1
// i = 1;
// str = """
// j = 1
//  -> str = "thao "
// j = 2 -> j <= i false


--- v2
// i = 2;
// str = ""
// j = 1
// -> str = "thao "
// j = 2; j <= i : true'
// -> str = "thao thao"
// j = 3; j <= i : false

--- v3
// i = 3;
// str = ""
// j = 1; j <= i-> true
// str = "thao "
// j = 2; j <= i -> true
// -> str = "thao thao "
// j= 3; j <= i -> true
// -> str = "thao thao thao "
// j = 4; j <= i -> fasle

--- v4
// i = 4;
// str = "";
// j = 1; j <= i -> true
// -> str = "thao "
// j = 2; j <= i -> tru
// -> str = "thao thao "
// j = 3; j <= i -> true
// -> str = "thao thao thao "
// j = 4; j <= i -> true
// -> str = "thao thao thao thao "
