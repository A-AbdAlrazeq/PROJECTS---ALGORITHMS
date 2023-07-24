function rFib(num) {
  num = parseInt(num);
  if (num <= 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return rFib(num - 1) + rFib(num - 2);
  }
}
console.log(rFib(-2));

function rTrib(num) {
  num = parseInt(num);
  if (num <= 0 || num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
  }
}
console.log(rTrib(5.1));

function ackermann(num1, num2) {
  if (num1 == 0) {
    return num2 + 1;
  } else if (num2 == 0) {
    return ackermann(num1 - 1, 1);
  } else {
    return ackermann(num1 - 1, ackermann(num1, num2 - 1));
  }
}

console.log(ackermann(0, 3)); // Output: 4
console.log(ackermann(3, 0)); // Output: 5
console.log(ackermann(3, 3)); // Output: 61

function Zib(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else if (num == 2) {
    return 2;
  } else if (num % 2 != 0) {
    var n = parseInt(num / 2);
    return Zib(n) + Zib(n - 1) + 1;
  } else {
    var n = parseInt(num / 2);
    return Zib(n) + Zib(n + 1) + 1;
  }
}
console.log("Zibonacci(10):", Zib(10));
console.log("Zibonacci(100):", Zib(100));
