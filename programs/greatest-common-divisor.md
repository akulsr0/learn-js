```javascript
function getGCD(a, b) {
  if(!b) {
    return a;
  }
  return getGCD(b, a%b);
}

console.log(getGCD(12,16)) // 4
console.log(getGCD(21, 35)) // 7
```