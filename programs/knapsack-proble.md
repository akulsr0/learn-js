### Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit(w) and the total value is as large as possible.
```javascript

function knapsack(val, weight, n, w) {
	var mem = [];
	for (let i = 0; i < n + 1; i++) {
		let intermediate_array = [];
		for (let j = 0; j < w + 1; j++) {
			intermediate_array.push(0);
		}
		mem.push(intermediate_array);
	}

	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < w + 1; j++) {
			if (weight[i - 1] <= j) {
				mem[i][j] = Math.max(
					val[i - 1] + mem[i - 1][j - weight[i - 1]],
					mem[i - 1][j]
				);
			} else {
				mem[i][j] = mem[i - 1][j];
			}
		}
	}

	return mem[n][w];
}
val = [4, 6, 3, 9, 2];
weight = [2, 12, 10, 5, 6];
n = val.length;
w = 15;
console.log(knapsack(val, weight, n, w));



```
