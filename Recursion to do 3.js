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

function rGCF(num1, num2) {
  if (num1 === num2) {
    return num1; // Base case: If num1 and num2 are equal, GCF is num1 (or num2).
  }

  if (num1 === 0) {
    return num2; // Base case: If num1 is 0, GCF is num2.
  }

  if (num2 === 0) {
    return num1; // Base case: If num2 is 0, GCF is num1.
  }

  if (num1 % 2 === 0 && num2 % 2 === 0) {
    // If both num1 and num2 are even, divide both by 2 and multiply the result by 2.
    return 2 * rGCF(num1 / 2, num2 / 2);
  } else if (num1 % 2 === 0) {
    // If num1 is even and num2 is odd, divide num1 by 2.
    return rGCF(num1 / 2, num2);
  } else if (num2 % 2 === 0) {
    // If num2 is even and num1 is odd, divide num2 by 2.
    return rGCF(num1, num2 / 2);
  } else {
    // If both num1 and num2 are odd, use binary GCD algorithm with abs(num1 - num2) / 2.
    const diff = Math.abs(num1 - num2);
    return rGCF(diff / 2, Math.min(num1, num2));
  }
}

// Test case
console.log(rGCF(123456, 987654)); // Output: 6 (GCF of 123456 and 987654 is 6)

function tarai(x, y, z) {
  if (x <= y) {
    return y;
  } else {
    return tarai(tarai(x - 1, y, z), tarai(y - 1, z, x), tarai(z - 1, x, y));
  }
}

console.log(tarai(10, 2, 9));
