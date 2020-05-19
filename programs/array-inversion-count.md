In an array, two elements at index i and j forms an inversion if a[i]>a[j] and i<j.

```javascript
function countInversions(arr) {
  let count = 0;
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(arr[i]>arr[j]) {
        count += 1;
      }
    }
  }
  return count;
}

let arr = [2,1,4,3,5]
// Inversions: (2,1) and (4,3)

console.log(countInversions(arr)) // 2
```
