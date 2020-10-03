```javascript
function countVowel(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowel("Learn js")); // 2
console.log(countVowel("javascript")); // 3
console.log(countVowel("why?")); // 0
```