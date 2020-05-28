const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const { questions } = require('../utils/gto');
const hljs = require('highlight.js');
const _ = require('underscore');

router.get('/', async (req, res) => {
  // Getting Programs
  const programsDir = path.join(__dirname, '../programs');
  const programsFiles = await fs.readdirAsync(programsDir);
  const programs = [];
  programsFiles.forEach((file) => {
    const slug = file.split('.')[0];
    const title = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    const mdContent = fs.readFileSync(programsDir + '/' + file, 'utf8');
    const mdHtml = marked(mdContent);
    const program = { slug, title, html: mdHtml };
    programs.push(program);
  });

  // Getting Questions
  const questionsDir = path.join(__dirname, '../questions');
  const quesFiles = await fs.readdirAsync(questionsDir);
  const questions = [];
  quesFiles.forEach((file) => {
    const slug = file.split('.')[0];
    const titleFirstWord = slug.split('-')[0];
    const title =
      titleFirstWord.charAt(0).toUpperCase() +
      titleFirstWord.slice(1) +
      ' ' +
      slug.split('-').slice(1).join(' ');
    const mdContent = fs.readFileSync(questionsDir + '/' + file, 'utf8');
    const mdHtml = marked(mdContent);
    const question = { slug, title, html: mdHtml };
    questions.push(question);
  });

  res.render('index', { programs, questions });
});

router.get('/guess-the-output', (req, res) => {
  const gtoDir = path.join(__dirname, '../guess-the-output');
  let randomQues = questions[Math.floor(Math.random() * questions.length)];
  randomQues.options = _.shuffle(randomQues.options);
  let title = randomQues.title
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const mdContent = fs.readFileSync(`${gtoDir}/${randomQues.title}.md`, 'utf8');
  marked.setOptions({
    highlight: function (code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
  });
  const mdHtml = marked(mdContent);
  res.render('gto', { randomQues, mdHtml, title });
});

module.exports = router;
