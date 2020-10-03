**Note:** Armstrong Numbers are those numbers whose sum of the cube of its digits equals the number itself.

```javascript
function checkArmstrong(num){
	let s = 0, n=num, d=0;
	while(n){
		d = n%10;
		s += (d*d*d);
		n = Math.floor(n/10);
	}
  if(s == num) return true
  return false
}

let num = 153;
checkArmstrong(num); // true
```
