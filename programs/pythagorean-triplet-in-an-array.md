Given an unsorted array of integers, write a function that finds a pythagorean triplet (a,b,c) such that  a^2 + b^2 = c^2, and returns it and if there is no triplet return -1.

```javascript
function havePTriplet(arr) {
  arr = arr.map(e => e*e);
  arr.sort((a,b) => a-b);
  for(let i=arr.length-1; i>1; i--) {
    let j = 0;
    let k = i-1;
    while(j<k) {
      if(arr[j]+arr[k]===arr[i]) {
        let a = Math.sqrt(arr[j]);
        let b = Math.sqrt(arr[k]);
        let c = Math.sqrt(arr[i])
        let ans = [a,b,c];
        return ans;
      } else {
        if(arr[j]+arr[k]<arr[i]) j++
        else k--
      }
    }
  }
  return -1;
}

let arr = [2,1,4,5,3];
console.log(havePTriplet(arr));
// [3,4,5]
```
