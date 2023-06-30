function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right){
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
        left = mid + 1
    }else {
        right = mid - 1
    }
  }
  return arr.length - left
}

module.exports = countZeroes