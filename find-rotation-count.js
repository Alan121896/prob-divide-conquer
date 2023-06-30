function findRotationCount(arr) {
  const length = arr.length;
  let low = 0;
  let high = length - 1;

  while (low <= high) {
    // Case 1: The array is already sorted
    if (arr[low] <= arr[high]) {
      return low;
    }

    let mid = Math.floor((low + high) / 2);
    let next = (mid + 1) % length; // Calculate the next element using modulo operator

    // Case 2: Check if the mid element is the smallest element
    if (arr[mid] <= arr[next] && arr[mid] <= arr[mid - 1]) {
      return mid;
    }

    // Case 3: Adjust the low and high indices to continue the search
    if (arr[mid] >= arr[low]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // No rotation found, return 0
  return 0;
}

module.exports = findRotationCount;
