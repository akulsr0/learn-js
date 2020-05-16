```javascript
function isPalindrome(str) {
  let revstr = str.split('').reverse().join('');
  let result = (str===revstr) ? true : false;
  return result
}

console.log(isPalindrome('mom')) // true
console.log(isPalindrome('bro')) // false
```