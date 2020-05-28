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
];

module.exports = { questions };
