**Note:** Armstrong Numbers are those numbers whose sum of the cube of its digits equals the number itself. Thr following program prints all the armstrong numbers till 10,000.

```javascript
let s = 0, n=0, d=0;
for(let i=0; i<10000; i++){
	n = i;
	while(n){
		d = n%10;
		s += (d*d*d);
		n = Math.floor(n/10);
	}
	if(s == i) console.log(i);
	s = 0;
}
```