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
];

module.exports = { questions };
