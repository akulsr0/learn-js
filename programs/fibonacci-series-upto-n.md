```javascript
function fibSeries(n) {
  let result = [0, 1];
  for(let i = 2; i < n; i++) {
    result.push(result[i-2] + result[i-1]);
  }
  return result;

}

console.log(fibSeries(1));
// [0, 1]

console.log(fibSeries(8));
// [0, 1, 1,  2, 3, 5, 8, 13]
```