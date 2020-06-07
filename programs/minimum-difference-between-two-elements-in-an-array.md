Find the minimum difference between any pair in a given unsorted array.

```javascript
function getMinDifference(arr) {
  arr = arr.sort((a,b) => a-b);
  let diff = Infinity;
  for(let i=0; i<arr.length-1; i++) {
    if(arr[i+1] - arr[i] < diff) {
      diff = arr[i+1] - arr[i];
    }
  }
  return diff;
}

let arr = [10,5,13,7,2];
console.log(getMinDifference(arr));
// 2
```
