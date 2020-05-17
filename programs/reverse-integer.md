```javascript
function reverseInt(n) {
  let strN = n.toString();
  let revStrN = strN.split('').reverse().join('');
  let revInt = parseInt(revStrN) * Math.sign(n);
  return revInt;
}

console.log(reverseInt(100)) // 1
console.log(reverseInt(-12)) // -21
```