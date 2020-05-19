This function calculates maximum sum of n consecutive elements in an array.

```javascript
function maxSubarray(arr, n) {
  let tempsum = 0;
  let maxsum = 0;
  for(let i=0; i<n; i++) {
    tempsum += arr[i]
  }
  maxsum = tempsum;
  for(let i=n; i<arr.length; i++) {
    tempsum = tempsum - arr[i-n] + arr[i];
    maxsum = Math.max(tempsum, maxsum)
  }
  return maxsum
}

// Maximum Subarray: (4,1,5)
let arr = [1,2,4,1,5,2,1,3]

console.log(maxSubarray(arr, 3))
// 10
```
