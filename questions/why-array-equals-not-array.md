```javascript
[] == ![]; // true
```

It happens because the empty array on the right side is coerced to number first. An empty array when coerced to number gives 0 despite being truthy.

Let's examine on both sides,

L.H.S. =>

```javascript
Boolean([]); // true
```

R.H.S. =>

```javascript
Number([]); // 0
!Number([]); // 1
Boolean(!Number([])); // true
```
