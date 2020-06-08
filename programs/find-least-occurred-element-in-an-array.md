Given an unsorted array, write a function to find the least occurring element in that array.

```javascript
function getLeastOccurred(arr) {
  let map = new Map();
  arr.forEach(e => {
    map.set(e, map.get(e)+1||1);
  }) 
  let countArr = [...map]
  let leastOccurredElement = countArr.reduce((acc, val) => {
    if(val[1] < acc[1]) {
      return val;
    } else {
      return acc;
    }
  })
  return leastOccurredElement[0];
}

let arr = [1,1,2,2,0,0,5,1,2,1,2,2];
let n = getLeastOccurred(arr);
console.log(n);
```
