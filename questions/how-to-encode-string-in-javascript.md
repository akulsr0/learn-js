We can use built-in **encodeURI()** function to encode a string.

Here's how:

```javascript
let someString = `find value of √4`;

console.log("Encoded Multiline String: ", encodeURI(someString))
// 'Encoded Multiline String: ' 'find%20value%20of%20%E2%88%9A4'

console.log("Encoded Emoji: ", encodeURI("🙂"))
// 'Encoded Emoji: ' '%F0%9F%99%82'
```