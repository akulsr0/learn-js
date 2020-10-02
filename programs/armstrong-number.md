**Note:** Armstrong Numbers are those numbers whose sum of the cube of its digits equals the number itself.

```javascript
function displayArmstrong(num){
	let s = 0, n=num, d=0;
	while(n){
		d = n%10;
		s += (d*d*d);
		n = Math.floor(n/10);
	}
		if(s == num) console.log("Its an Armstrong Number");
		else console.log("Its NOT an Armstrong Number");
}

let num = 153; //limit upto which you want to find the number
checkArmstrong(n);

```