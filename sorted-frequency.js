function sortedFrequency(arr, target) {
    function binarySearch(arr, target, searchFirst){
        let left = 0;
        let right = arr.length - 1
        let result = -1

        while (left <= right){
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target){
                result = mid;
                if(searchFirst) {
                    right = mid -1; // looking for first occurence
                } else{
                    left = mid + 1; // looking for last occurence
                }
            } else if (arr[mid] < target){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result
    }

    const firstIdx = binarySearch(arr, target, true);
    const lastIdx = binarySearch(arr, target, false);

    if(firstIdx === -1){
        return 0;
    } else {
        return lastIdx - firstIdx + 1
    }
}

module.exports = sortedFrequency