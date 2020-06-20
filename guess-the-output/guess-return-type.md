```javascript
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}

console.log(typeof bar());
```
