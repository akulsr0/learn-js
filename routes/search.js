const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const hljs = require('highlight.js');

router.get('/', async (req, res) => {
  try {
    const sQuery = req.query.q.toLowerCase();

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
      const program = { slug, title };
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
      const question = { slug, title };
      questions.push(question);
    });

    let qPrograms = programs.filter((p) =>
      p.title.toLowerCase().includes(sQuery)
    );
    let qQuestions = questions.filter((q) =>
      q.title.toLowerCase().includes(sQuery)
    );

    res.render('searchresults', {
      sQuery,
      programs: qPrograms,
      questions: qQuestions,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
