Given an unsorted array, write a function to find the equilibrium point.
Equilibrium point is the index of array where sum of elements before it is equal to the sum of elements after it.

```javascript
function equilibriumPoint(arr) {
 for(let i=1; i<arr.length-1; i++) {
  let leftsum = arr.slice(0,i).reduce((a,b)=>a+b);
  let rightsum = arr.slice(i+1,arr.length).reduce((a,b)=>a+b);
  if(leftsum === rightsum) {
    return i;
  }
 }  
 return -1;
}

let arr = [5,5,3,4,6];
console.log(equilibriumPoint(arr));
// 2
```
