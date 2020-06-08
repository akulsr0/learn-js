```javascript
function segEvenOdd(arr) {
  let i = -1;
  for(let j=0; j<arr.length; j++) {
    if(arr[j]%2===0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

let a = [1,2,3,4,5,6,7,8];
console.log(segEvenOdd(a));
// [2,4,6,8,5,3,7,1]
```
