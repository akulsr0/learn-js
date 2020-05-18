The JavaScript delete operator removes a property from an object.

For example:

```javascript
// Creating a demo object
let user = {
  name: "Akul Srivastava",
  username: "akulsr0",
  isAuthenticated: true,
};

console.log(user.isAuthenticated); 
// true

delete user.isAuthenticated;

console.log(user.isAuthenticated);
//undefined

console.log(user);
// { name: 'Akul Srivastava', username: 'akulsr0' }
```
