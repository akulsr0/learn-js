### 1. Optional chaining => symbol => **?.**

This is use to access long chain properties and methods of an object.

For example:

```javascript
const Obj = {
  db: {
    user: {
      name: undefined,
      sayHii(name){
        console.log(`Hii ${name}`);
      }
    },
  },
};

console.log(Obj?.db?.user?.name || "username not found");
// username not found
//Because in above obj name is undefined

// We can also call methods of the object by ?.()
console.log(Obj?.db?.user?.sayHii?.("learn js"));
//Hii learn js

// we can also do dynamic properties access by ?.[]
const hiiFunc = "sayHii";
console.log(Obj?.db?.user?.[hiiFunc]?.("learn js"));
//Hii learn js
```

### 2. Nullish coalescing => symbol => ??

New short-circuiting operator to handle only nullish values (undefined or null)

For Example:

```javascript
console.log(null ?? []);
// []
console.log(undefined ?? []);
//[]
console.log(false ?? "learn js");
//false
// This is strictly equal to the (null or undefined only) not falsy value
console.log(0 ?? 1);
//0
console.log('' ?? "learn js");
// ''

```
### 3. Object.fromEntries()

This will convert [['x',2], ['y',4]] into { x: 2, y: 4 }

For Example:

```javascript
// First we need to understand Object.entries()
const obj = {x:2,u:4};
const entries = Object.entries(obj);
console.log(entries);
//[['x',2],['u',4]]

//Now if want again that object we can do
console.log(Object.fromEntries(entries));
//{x:2,u:4}

```
### 4. Array.prototype.flat()

Flat returns a flattened version of an given array

Like [1,2,[3]] into [1,2,3]

For Example:

```javascript

const nestedArray = [1,[2, [3]];

console.log(nestedArray.flat());
//[1,2,[3]]
//Here flat flatten the above array into one level deep
//We can also pass any number like 1,2,3 to recursively flatten up to that depth
// Or If you wanna to flatten all nested array then pass (Infinity)

console.log(nestedArray.flat(1));
//[1,2,[3]] // 1 is default depth
console.log(nestedArray.flat(Infinity));
//[1,2,3] will flatten all nested array
```
### 5. Array.prototype.flatMap()

This is use to create duplicate elements of an array

For Example:

```javascript

console.log([2,3,4].map((x)=>[x,x]).flat());
//[2,2,3,3,4,4]

//Now we can achieve this simply by flatMap()
console.log([1,2,3].flatMap((x)=>[x,x]));
//[1,1,2,2,3,3]
```
### 6. Promise.allSettled()

This will settled or complete when all the input promises are settled.

Which means that they are either fullfilled or rejected it does not matter.

For Example:

```javascript
const promises = [Promise.resolve("Promise1"),
                  Promise.resolve("Promise2"),
                  Promise.reject("Promise3")];

(async ()=>{
await Promise.allSettled(promise1).then(res=>{

      res.forEach((result)=>console.log(result))

      //{status: "fulfilled", value: "promise1"}
      // {status: "fulfilled", value: "promise2"}
      //{status: "rejected", reason: "promise3"}

})();
```
### 7. Public and private class fields

We can make our class fields private by using # before name of the field

For Example:

```javascript

class IncreasingCounter {
    _count = 0; //Public field

  get value() {
    return this._count;
  }
  increment() {
    this._count++;
  }
}
const counter = new IncreasingCounter();
console.log(counter._count);
//0
console.log(counter.value);
//0
counter.increment();
console.log(counter.value);
//1
counter._count = 10;
console.log(counter._count);
//10
// Now making counter field private

class PrivateCounter {
    #count = 0; // Now count is private we can't access outside

  get value() {
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
const pCounter = new PrivateCounter();

console.log(pCounter.#count);
//SyntaxError
console.log(pCounter.value);
//0
pCounter.#count = 23;
//SyntaxError
```
### 8. Dynamic import()

Now by using Dynamic import() we can import module on-demand (or conditionally).

Dynamic import introduces a new function-like form of import.

Now no need to import module at top of the file.

For Example:
```javascript
//Suppose ./main.js file have two function exported
//main.js
export default ()=>{
  console.log("This is default function");
};

export const learnJs = ()=>{
  console.log("Learn Js");
}

// app.js

//Now we can import it anywhere in the file by using function Dynamic import

(async()=>{

const module = await import('./main.js');

module.default();
 // logs => This is default function
module.learnJs();
//logs => Learn Js

})();

```
### 9. globalThis

Now we can access the global **this** in any javascript environment

(like browser,Node.js or something else)

For Example:

```javascript
//In browser
console.log(globalThis);
//window
//In node js
console.log(globalThis);
//global
```
### 10. String.prototype.replaceAll()

This is use to replace all instances of a given substring.

For Example:

```javascript
console.log('abba'.replace('b','_'))
//a_ba
// This only replace the first occurence of the substring.

//Now we can use replaceAll() to remove all the occrurence
console.log('abba','_');
//a__a
```






