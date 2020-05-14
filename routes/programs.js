const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const hljs = require('highlight.js');

router.get('/', (req, res) => {
  const directoryPath = path.join(__dirname, '../programs');
  fs.readdirAsync(directoryPath)
    .then((filesArr) => {
      const programs = [];
      filesArr.forEach((file) => {
        const slug = file.split('.')[0];
        const title = slug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
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
        const program = { slug, title, html: mdHtml };
        programs.push(program);
      });
      res.render('programs', { programs });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:slug', (req, res) => {
  const directoryPath = path.join(__dirname, '../programs');
  const slug = req.params.slug;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const mdContent = fs.readFileSync(directoryPath + '/' + slug + '.md', 'utf8');
  marked.setOptions({
    highlight: function (code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
  });
  const mdHtml = marked(mdContent);
  const program = { slug, title, html: mdHtml };
  res.render('program', { program });
});

module.exports = router;
