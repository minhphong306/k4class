// Viết một chương trình JavaScript duyệt qua các số nguyên từ 1 đến 100. Nhưng đối với số chia hết cho ba thì in "Fizz" thay vì số đó và đối với số chia hết cho năm thì in "Buzz". Đối với số chia hết cả ba và năm, in "FizzBuzz".

// if (i chia het 3) -> fizz
// else if (i chia het 5) -> buzz
// else if (i chia het 3 && i chia het 5) -> fizzbuzz
// else -> i

// 15 -> fizzbuzz

// %: kiem tra phep du
// 2 % 3 = 2
// 75 - 60 % 3 = (3 + 2) % 3
// 75 % 3 = 0

function solution() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

solution();