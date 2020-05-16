**Note:** Binary Search can only be done on a sorted array.

```javascript
function binarySearch(arr, element) {
    let left = 0 
    let right = arr.length
    while (left<right) {
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid]>element) {
            right = mid;
        } else if(arr[mid]<element) {
            left = mid + 1
        } else {
            return mid;
        }
    }
    return null;
}

let arr = [1,2,3,4,6,7,8]

let foursIndex = binarySearch(arr, 4)
let fivesIndex = binarySearch(arr, 5)

console.log(foursIndex) // 3
console.log(fivesIndex) // null
```