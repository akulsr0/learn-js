### Octal Literals

Octal literals are a way to write octal numbers in javascript.

```javascript
// Parsed as Decimal number
console.log(08) // 8
console.log(09) // 9

// Parsed as Octal Numbers (in non-strict mode)
console.log(010) // 8
console.log(011) // 9

// Parsed as Octal Numbers (in strict mode)

console.log(0o10); // 8
console.log(0o11); // 9
```

Similarly there are binary and hexadecimal literals

```javascript
// Parsed as Binary Number
console.log(0b101); // 5

// Parsed as Hexadecimal Number
console.log(0x1a); // 26
```
