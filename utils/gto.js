let questions = [
  {
    title: 'bool-plus-number',
    options: ['12', 'false', 'true', '2'],
    answer: '2',
  },
  {
    title: 'bool-plus-string',
    options: ['true1', 'truetrue', 'true', 'undefined'],
    answer: 'true1',
  },
  {
    title: 'tricky-array-init',
    options: ['[3, 3, 3]', '[]', '[ <3 empty items> ]', '[null, null, null]'],
    answer: '[ <3 empty items> ]',
  },
  {
    title: 'adding-two-array',
    options: [
      '[1, 2, 3, 4, 5]',
      '[1, 2, 3, 3, 4, 5]',
      '1,2,33,4,5',
      '1,2,3,3,4,5',
    ],
    answer: '1,2,33,4,5',
  },
  {
    title: 'destructuring-and-string-joining',
    options: ['i,o,u', 'iou', 'u', 'undefined'],
    answer: 'i,o,u',
  },
  {
    title: 'the-number-constructor',
    options: ['true', 'false'],
    answer: 'false',
  },
  {
    title: 'typeof-array',
    options: ['array', 'object', 'null', 'undefined'],
    answer: 'object',
  },
  {
    title: 'typeof-nan',
    options: ['number', 'object', 'null', 'undefined'],
    answer: 'number',
  },
  {
    title: 'delete-array-element',
    options: [
      '[ 1, 2, 3, <1 empty item>, 5 ]',
      '[ 1, 2, 3, null, 5 ]',
      '[ 1, 2, 3, 4, 5 ]',
      '[ 1, 2, 3, undefined, 5 ]',
    ],
    answer: '[ 1, 2, 3, <1 empty item>, 5 ]',
  },
  {
    title: 'array-length-after-deleting-element',
    options: ['5', '4', '0', 'Reference Error'],
    answer: '5',
  },
  {
    title: 'calling-function-before-defining',
    options: ['John', 'Jane', 'undefined', 'Reference Error'],
    answer: 'John',
  },
  {
    title: 'instanceof-number',
    options: ['true', 'false'],
    answer: 'false',
  },
  {
    title: 'is-deleted-array-element-undefined',
    options: ['-1', '4', 'null', 'empty'],
    answer: '-1',
  },
  {
    title: 'is-this-not-a-number',
    options: ['true', 'false'],
    answer: 'true',
  },
  {
    title: 'hundred-by-zero',
    options: ['0', 'Infinity', 'NaN', '1'],
    answer: 'Infinity',
  },
  {
    title: 'string-search-regex',
    options: ['undefined', 'D', 'H', 'h'],
    answer: 'H',
  },
  {
    title: 'array-reduce-right',
    options: ['3LOL5', '5LOL21', '5LOL3', '239'],
    answer: '5LOL21',
  },
  {
    title: 'substr-and-slice',
    options: ['true', 'false'],
    answer: 'false',
  },
  {
    title: 'string-iterator',
    options: ['string', 'number', 'undefined', 'symbol'],
    answer: 'string',
  },
  {
    title: 'string-repeat',
    options: ['hahaha', 'hahahaha'],
    answer: 'hahaha',
  },
  {
    title: 'string-charCodeAt',
    options: ['true', 'false'],
    answer: 'true',
  },
  {
    title: 'is-nan-finite',
    options: ['undefined', 'true', 'false', 'Reference Error'],
    answer: 'false',
  },
  {
    title: 'bool-compare',
    options: ['true', 'false', 'NaN', 'undefined'],
    answer: 'false',
  },
  {
    title: 'guess-return-type',
    options: ['number', 'function', 'string', 'Syntax Error'],
    answer: 'function',
  },
  {
    title: 'adding-empty-and-non-empty-array',
    options: ['f,o,o', 'Type Error', '[][][f,o,o]', '[f,o,o]'],
    answer: 'f,o,o',
  },
  {
    title: 'new-array-to-string',
    options: ["''", ',,,', ',,', '[]'],
    answer: ',,',
  },
  {
    title: 'set-array-element-by-index',
    options: [
      '[ <1 empty item>, 2, 3 ]',
      '[undefined, 2, 3]',
      '[null, 2, 3]',
      'Type Error',
    ],
    answer: '[ <1 empty item>, 2, 3 ]',
  },
];

module.exports = { questions };
