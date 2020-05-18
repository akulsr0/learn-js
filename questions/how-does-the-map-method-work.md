## Polyfill for Array.prototype.map() function

.map() method performs a function(callback) over all the elements of the array and returns a new array ie. it does not mutate the original array.

```javascript
let arr = [6, 9, 3, 7, 12];

Array.prototype.myMap = function(callback) {
	let newArray = [];
	let arr = this;
	for (let i = 0; i < arr.length; i++) {
		newArray.push(callback(arr[i]));
	}
	return newArray;
};

console.log(arr.myMap(x => 2 * x));

// Output:
// [12, 18, 6, 14, 24]

```
