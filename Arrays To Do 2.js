function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
arr = [1, 2, 3, 4, 5];
console.log(reverse(arr));

function rotate(arr, shiftBy) {
  var t = Math.abs(shiftBy);
  while (t > 0) {
    if (shiftBy > 0) {
      var temp = arr[arr.length - 1];
      for (var i = arr.length - 1; i > 0; i--) arr[i] = arr[i - 1];
      arr[0] = temp;
    } else {
      var temp = arr[0];
      for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr[arr.length + 1] = temp;
    }
    t--;
  }
  return arr;
}

console.log(rotate([1, 2, 3], 1));

function filterArr(arr, min, max) {
  var i = 0;
  var j = 0;

  while (i < arr.length) {
    if (arr[i] >= min && arr[i] <= max) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }

  arr.length = j;
  return arr;
}

var array = [3, 10, 5, 8, 1, 12];
console.log(filterArr(array, 2, 12));

function arrConcat(arr1, arr2) {
  var result = [];

  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (var j = 0; j < arr2.length; j++) {
    result.push(arr2[j]);
  }

  return result;
}

console.log(arrConcat(["a", "b"], [1, 2]));
