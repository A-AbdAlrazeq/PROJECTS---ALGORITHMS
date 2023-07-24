function binarySearchRecursive(arr, value, left = 0, right = arr.length - 1) {
  if (left > right) {
    return false;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === value) {
    return true;
  } else if (arr[mid] > value) {
    return binarySearchRecursive(arr, value, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, value, mid + 1, right);
  }
}

console.log(binarySearchRecursive([1, 3, 5, 7, 9, 11, 13], 8));

function rGCF1(num1, num2) {
  if (num1 == num2) {
    return num1;
  }
  if (num1 > num2) {
    return rGCF1(num1 - num2, num2);
  } else {
    return rGCF1(num1, num2 - num1);
  }
}
console.log(rGCF1(2, 3));

function GCF(param1, param2) {
  if (param1 == param2) {
    return param1;
  }
  if (param1 > param2) {
    if ((param1 / param2) % 1 === 0) {
      return param2;
    } else {
      return GCF(param1 - param2, param2);
    }
  }
  if (param1 < param2) {
    if ((param1 / param2) % 1 === 0) {
      return param2;
    } else {
      return GCF(param1, param2 - param1);
    }
  }
}
console.log(GCF(123456, 987654));

function tarai(x, y, z) {
  if (x <= y) {
    return y;
  } else {
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
  }
}

console.log(tarai(10, 2, 9));

function generateSubsets(str, index = 0, currentSubset = "", subsets = []) {
  if (index === str.length) {
    console.log(currentSubset);
    subsets.push(currentSubset);
    console.log(subsets);
  } else {
    generateSubsets(str, index + 1, currentSubset, subsets); // Exclude the current character
    console.log("currentSubset " + currentSubset + " str " + str.charAt(index));
    generateSubsets(str, index + 1, currentSubset + str.charAt(index), subsets); // Include the current character
  }

  return subsets;
}

// Test the function with "abc"
const result = generateSubsets("abc");
console.log(result);
