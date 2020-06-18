### Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit(w) and the total value is as large as possible.

```javascript
function knapsack(val, weight, n, w, mem) {
	let result;
	// base condition :
	if (n == 0 || w == 0) {
		return 0;
	}
	if (mem[n][w] != -1) {
		// return value if already stored 
		// in the look-up table
		return mem[n][w];
	} else if (weight[n - 1] <= w) {
		// store the maximum between the two results,
		// when the item is included in the knapsack 
		// and when it is excluded, in the result variable.
		result = Math.max(
			val[n - 1] + knapsack(val, weight, n - 1, w - weight[n - 1], mem),
			knapsack(val, weight, n - 1, w, mem)
		);
	} // if the weight of item in the weight array > capacity of knapsack, it cannot be included.
	else {
		result = knapsack(val, weight, n - 1, w, mem);
	}
	// store the result in the look-table, mem, before returning result.
	mem[n][w] = result;
	return result;
}

let val = [4, 6, 3, 9, 2];
let weight = [2, 12, 10, 5, 6];
let n = val.length;
let w = 15;
let mem = [];

for (let i = 0; i < n + 1; i++) {	
	let intermediate_array = new Array(w+1).fill(-1);
	mem.push(intermediate_array);
}

console.log(knapsack(val, weight, n, w, mem));
// Output: 
// 15
```
