**Problem**
Given two sequences, find the length of longest subsequence present in both of them.

```javascript
function lcs(s1, s2, x, y) {
  if(x==0 || y==0) {
    return 0;
  } else if(s1.charAt(x-1) == s2.charAt(y-1)) {
    return 1 + lcs(s1, s2, x-1, y-1)
  } else {
    return Math.max(lcs(s1,s2,x-1,y), lcs(s1,s2,x,y-1))
  }
}

let s1 = 'axcdz'
let s2 = 'ajcd'
let x = s1.length
let y = s2.length

console.log(lcs(s1, s2, x, y))
// 3
```
