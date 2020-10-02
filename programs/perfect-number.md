**Note:** Perfect Numbers are those numbers whose sum of its factors(excluding the number itself) is equal to the number. Eg: 6(1+2+3=6) is a perfect Number.


```javascript
function displayPerfect(n){
	let s=0;
	console.log("The Perfect Numbers from 1-10000 are listed below:");
	for(let i=2; i<n; i++){
		for(let j=1; j<i; j++){
			if(i%j == 0) s+= j;
		}
		if(s==i) console.log(i);
		s=0;
	}	
}

let n = 10000; //the number upto which you want to display the number
displayPerfect(n);

```
