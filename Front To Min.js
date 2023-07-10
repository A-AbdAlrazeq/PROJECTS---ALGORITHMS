arr = [3, 4, 5, 0, 2, 1, 6];
function minFront(arr) {
  let min = arr[0];
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      index = i;
    }
  }
  for (var j = index; j > 0; j--) {
    var temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    console.log(arr);
  }
  return arr;
}
console.log(minFront(arr));
