const { questions } = require('./gto');
const path = require('path');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function ifGTOExists(filename) {
  filename = filename + '.md';
  let dir = path.join(__dirname, '../guess-the-output/');
  if (fs.existsSync(dir + filename)) {
    return true;
  } else {
    return false;
  }
}

for (let question of questions) {
  test('Check if corresponding markdown exists', () => {
    expect(ifGTOExists(question.title)).toBe(true);
  });
}

for (let question of questions) {
  test('Check if there is a valid answer in options and only once', () => {
    expect(question.options.includes(question.answer)).toBe(true);
    expect(
      question.options.filter((opt) => opt === question.answer).length
    ).toBe(1);
  });
}
