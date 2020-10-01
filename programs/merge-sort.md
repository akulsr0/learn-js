```javascript
/*Merge sort is an example of a divide-and-conquer type sorting-algorithm. The input for merge sort is an array of integers of length n, which needs to be sorted, typically from least to greatest. What merge sort does is it splits the unsorted array into two parts and then you recursively apply merge sort to these sub-arrays to further split the arrays until you are left with a bunch of single-element arrays.8*/

var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];


function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));