### Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit(w) and the total value is as large as possible.
```javascript

function knapsack(val, weight, n, w) {
	var mem = [];
	// creating a matrix of size (n+1) X (w+1) and initializing each element with 0 initially.
	for (let i = 0; i < n + 1; i++) {
		let intermediate_array = [];
		for (let j = 0; j < w + 1; j++) {
			intermediate_array.push(0);
		}
		mem.push(intermediate_array);
	}
	// Storing maximum value for ith item that has j weight in mem[i][j]. 
	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < w + 1; j++) {
			if (weight[i - 1] <= j) {
				// Making a choice on whether or not to include an item in the knapsack. When we decide to choose the item, the capacity of the knapsack decreases. On the contrary, if we do not choose it, the capacity remains the same. Selection is done to maximise profit.
				mem[i][j] = Math.max(
					val[i - 1] + mem[i - 1][j - weight[i - 1]],
					mem[i - 1][j]
				);
			} else {
				mem[i][j] = mem[i - 1][j];
			}
		}
	}
	// As a result mem[n][w] stores the maximum profit.
	return mem[n][w];
}
let val = [4, 6, 3, 9, 2];
let weight = [2, 12, 10, 5, 6];
let n = val.length;
let w = 15;
console.log(knapsack(val, weight, n, w));

// Output:
// 15



```
