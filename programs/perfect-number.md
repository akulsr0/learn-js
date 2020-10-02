**Note:** Perfect Numbers are those numbers whose sum of its factors(excluding the number itself) is equal to the number. Eg: 6(1+2+3=6) is a perfect Number.


```javascript
function checkPerfect(n){
	let s=0;
	for(let i=1; i<n; i++){
		if(n%i == 0) s+= i;
	}
	if(s==i) console.log("Its a perfect number");
	else console.log("Its NOT a perfect number");
}

let n = 6; //the number which you want to check
checkPerfect(n);

```
