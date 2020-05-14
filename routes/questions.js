const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const hljs = require('highlight.js');

router.get('/', async (req, res) => {
  const directoryPath = path.join(__dirname, '../questions');
  const filesArr = await fs.readdirAsync(directoryPath);
  const questions = [];
  filesArr.forEach((file) => {
    const slug = file.split('.')[0];
    const titleFirstWord = slug.split('-')[0];
    const title =
      titleFirstWord.charAt(0).toUpperCase() +
      titleFirstWord.slice(1) +
      ' ' +
      slug.split('-').slice(1).join(' ');
    const mdContent = fs.readFileSync(directoryPath + '/' + file, 'utf8');
    marked.setOptions({
      highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language)
          ? language
          : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
      },
    });
    const mdHtml = marked(mdContent);
    const question = { slug, title, html: mdHtml };
    questions.push(question);
  });
  res.render('questions', { questions });
});

router.get('/:slug', (req, res) => {
  const directoryPath = path.join(__dirname, '../questions');
  const slug = req.params.slug;
  const titleFirstWord = slug.split('-')[0];
  const title =
    titleFirstWord.charAt(0).toUpperCase() +
    titleFirstWord.slice(1) +
    ' ' +
    slug.split('-').slice(1).join(' ');
  const mdContent = fs.readFileSync(directoryPath + '/' + slug + '.md', 'utf8');
  marked.setOptions({
    highlight: function (code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
  });
  const mdHtml = marked(mdContent);
  const question = { slug, title, html: mdHtml };
  res.render('question', { question });
});

module.exports = router;
