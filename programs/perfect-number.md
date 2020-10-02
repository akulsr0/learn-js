**Note:** Perfect Numbers are those numbers whose sum of its factors(excluding the number itself) is equal to the number. Eg: 6(1+2+3=6) is a perfect Number.


```javascript
let s=0;
console.log("The Perfect Numbers from 1-10000 are listed below:");
for(let i=2; i<10000; i++){
	for(let j=1; j<i; j++){
		if(i%j == 0) s+= j;
	}
	if(s==i) console.log(i);
	s=0;
}
```
