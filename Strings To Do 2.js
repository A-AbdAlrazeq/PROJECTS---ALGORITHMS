function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("aboodrazeq"));

function removeEvenLen(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i].length % 2 == 0) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
        console.log(arr[j]);
      }
      arr.pop();
    } else {
      i++;
    }
  }
  return arr;
}

console.log(
  removeEvenLen([
    "Nope!",
    "Its",
    "Kris",
    "starting",
    "with",
    "K!",
    "(instead",
    "of",
    "Chris",
    "with",
    "C)",
    ".",
  ])
);
// output : ["Nope!","Its","Chris","."]
