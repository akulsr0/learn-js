```javascript
function checkAnagram(str1, str2) {
  let sortedLowerStr1 = str1.toLowerCase().split('').sort().join('');
  let sortedLowerStr2 = str2.toLowerCase().split('').sort().join('');
  if (sortedLowerStr1 === sortedLowerStr2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagram('listen', 'silent')); // true
console.log(checkAnagram('hey', 'heyy')); // false
console.log(checkAnagram('the eyes', 'they see')); // true
```
