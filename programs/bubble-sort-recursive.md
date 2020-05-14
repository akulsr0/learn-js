```javascript
function bubbleSortRecursive(arr, n) {
  if (n === 1) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return bubbleSortRecursive(arr, n - 1);
}

let a = [2, 4, 1, 3, 5];
console.log(bubbleSortRecursive(a, a.length - 1)); // [1,2,3,4,5]
```
