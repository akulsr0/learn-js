```javascript
function factorial(n) {
  let ans = 1;
  for(let i=2; i<=n; i++) {
    ans *= i;
  }
  return ans;
}

console.log(factorial(5)) // 120
```