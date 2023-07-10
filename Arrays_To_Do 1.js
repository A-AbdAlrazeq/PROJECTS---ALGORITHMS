arr = [1, 2, 3, 4, 5];
function pushFront(arr, x) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
    //console.log(arr);
  }
  arr[0] = x;
  return arr;
}
console.log(pushFront(arr, 0));

function popFront(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
    //console.log(arr);
  }
  arr.length = arr.length - 1;
  //arr.pop();
  return arr;
}

console.log(popFront(arr));

function insertAt(arr, index, val) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
    //console.log(arr);
  }
  arr[index] = val;
  return arr;
}

console.log(insertAt(arr, 3, 0));

function removeAt(arr, index) {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
    //console.log(arr);
  }
  arr.length = arr.length - 1;
  return arr;
}

console.log(removeAt(arr, 0));

function swapPairs(arr) {
  for (var i = 0; i < arr.length - 1; i += 2) {
    //console.log(arr);
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
console.log(swapPairs(arr));
arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5, 6];
function removeDupes(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      removeAt(arr, i);
      i--;
    }
  }
  return arr;
}
console.log(removeDupes(arr));
