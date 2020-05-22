### Program to find the number of 1s in binary representation of a number.

```javascript
const noOfOnes = num => {
	let count = 0;
	while (num) {
		if (num & 1) {
			count += 1;
		}
		num = num >> 1;
	}
	return count;
};
console.log(noOfOnes(2)); // 1
console.log(noOfOnes(3)); // 2
console.log(noOfOnes(7)); // 3
console.log(noOfOnes(8)); // 1

// Since: 
// 2 -> 10
// 3 -> 11
// 7 -> 111
// 8 -> 1000
```
