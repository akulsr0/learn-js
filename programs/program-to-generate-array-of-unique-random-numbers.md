###Program to generate array of unique random numbers

```javascript
//Here we are getting an array of unique random numbers of length 5 from 0 to 20

let uniqueNumbers = [];

function TrueUnique() {
  if (uniqueNumbers.length === 5) {
    return;
  } else {
    let randomNumber = Math.floor(Math.random() * 21);
    if (!isRandomNumberInuniqueNumbers(randomNumber)) {
      uniqueNumbers.push(randomNumber);
      TrueUnique();
    } else {
      TrueUnique();
    }
  }
}

function isRandomNumberInuniqueNumbers(randomNumber) {
  for (let i = 0; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers[i] == randomNumber) {
      return true;
    }
  }
  return false;
}

TrueUnique();
console.log(uniqueNumbers);
```
