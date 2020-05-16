```javascript
function linearSearch(arr, element) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i]===element) {
      return i;
    }
  }
  return null;
} 

let arr = [15,12,10,11,13]

let ninesIndex = linearSearch(arr, 9)
let tensIndex = linearSearch(arr, 10)

console.log(ninesIndex) // null
console.log(tensIndex) // 2
```