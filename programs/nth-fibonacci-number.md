```javascript
function nthFib(n) {
  if(n < 2) {
    return n
  }
  return nthFib(n-1) + nthFib(n-2)
}

let sixthFibonacci = nthFib(6)
let tenthFibonacci = nthFib(10)

console.log(sixthFibonacci) // 8
console.log(tenthFibonacci) // 55
```