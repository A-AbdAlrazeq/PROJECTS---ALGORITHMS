function removeBlanks(str) {
  let result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result += str[i];
    }
  }
  return result;
}

console.log(removeBlanks("abood razeq xxw2q fewf ewfwr"));

function getDigits(str) {
  let digit = "";
  for (var i = 0; i < str.length; i++) {
    //When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.
    if (!isNaN(Number(str[i]))) {
      digit += str[i];
    }
  }
  return digit;
}
console.log(getDigits("abc8c0d1ngd0j0!8"));

function acronym(str) {
  const words = str.split(" ");
  let acronym = "";
  for (var i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0).toUpperCase();
    acronym += firstLetter;
  }
  return acronym;
}
console.log(acronym("abood razeq bab bob"));

function countNonSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    }
  }
  return count;
}
console.log(countNonSpaces("Hello world !"));

function removeShorter(arr, num) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  removeShorter(["abood", "razeq", "bandora", "bob", "beb", "ro"], 3)
);
