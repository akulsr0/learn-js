```javascript
function maxChar(str) {
  let chars = {};
  for(let char of str) {
    chars[char] = chars[char]+1 || 1;
  }
  let max=0, maxChars='';
  for(let char in chars) {
    if(chars[char]>max) {
      max = chars[char];
      maxChars = char
    }
  }
  return maxChars;
}

console.log(maxChar('Hello')) // 'l'
console.log(maxChar('abbccd')) // 'b'
```