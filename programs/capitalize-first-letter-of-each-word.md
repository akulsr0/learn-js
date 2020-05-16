```javascript
function capitalize(str) {
  let wordsArr = [];
  for(let word of str.split(' ')) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    wordsArr.push(newWord);
  }
  return wordsArr.join(' ')
}

let s = "deno and node are anagram"
let capitalSentence = capitalize(s)

console.log(capitalSentence)
// 'Deno And Node Are Anagram'

```