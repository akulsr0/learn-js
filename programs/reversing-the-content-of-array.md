###Reversing the content of Array

```javascript
function reverserArray(array) {
  let j = array.length - 1; // j will Point to last Element
  let i = 0; // i will be pointing to first element
  let temp;
  while (i < j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  return array;
}
console.log(reverserArray([1, 2, 3, 4, 5]));
// output:[ 5, 4, 3, 2, 1 ]
```
