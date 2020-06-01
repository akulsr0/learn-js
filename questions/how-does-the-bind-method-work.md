### Polyfill for Function.prototype.bind() method

.bind() method binds the this keyword of a function with an object(passed as the first argument) and returns it. This function can be invoked later. Rest of the arguments can be passed separated by a comma.


```javascript

const person = {
	firstname: 'John',
	lastname: 'Doe'
};

function printInfo(age, country) {
	console.log(
		`Hi, my name is ${this.firstname} ${this.lastname} and I am ${age} years old. I live in ${country}`
	);
}

var print = printInfo.bind(person, 100);
print('xyz'); // Original bind method

// Our implementation of bind method :
Function.prototype.myBind = function(...args) {
	let that = this,
		val = args.slice(1);

	return function(...args2) {
		that.apply(args[0], [...val, ...args2]);
	};
};

var myPrint = printInfo.myBind(person, 100);
myPrint('xyz');

// Output of original bind method :
// Hi, my name is John Doe and I am 100 years old. I live in xyz

// Output of polyfill of bind method we built :
// Hi, my name is John Doe and I am 100 years old. I live in xyz




```
