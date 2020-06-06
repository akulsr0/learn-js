const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const hljs = require('highlight.js');
const { questions } = require('../utils/gto');
const topics = require('../utils/topics');

router.get('/gto/all', (req, res) => {
  res.json(questions);
});

router.get('/gto/:title', (req, res) => {
  const title = req.params.title;
  const gtoDir = path.join(__dirname, '../guess-the-output/');
  if (!fs.existsSync(gtoDir + title + '.md')) {
    return res.json({ error: 'File not found' });
  }
  const mdContent = fs.readFileSync(`${gtoDir}/${title}.md`, 'utf8');
  const titleUppercase = title
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  res.json({ slug: title, title: titleUppercase, mdContent });
});

router.get('/questions/all', async (req, res) => {
  try {
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
      const question = { slug, title, mdContent };
      questions.push(question);
    });
    res.json(questions);
  } catch (error) {
    console.log(error);
  }
});

router.get('/programs/all', async (req, res) => {
  try {
    const directoryPath = path.join(__dirname, '../programs');
    const filesArr = await fs.readdirAsync(directoryPath);
    const programs = [];
    filesArr.forEach((file) => {
      const slug = file.split('.')[0];
      const titleFirstWord = slug.split('-')[0];
      const title =
        titleFirstWord.charAt(0).toUpperCase() +
        titleFirstWord.slice(1) +
        ' ' +
        slug.split('-').slice(1).join(' ');
      const mdContent = fs.readFileSync(directoryPath + '/' + file, 'utf8');
      const program = { slug, title, mdContent };
      programs.push(program);
    });
    res.json(programs);
  } catch (error) {
    console.log(error);
  }
});

router.get('/topics', async (req, res) => {
  try {
    const programsDir = path.join(__dirname, '../programs');
    const programsFiles = await fs.readdirAsync(programsDir);
    const programs = [];
    programsFiles.forEach((file) => {
      const slug = file.split('.')[0];
      const title = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      const searchKey = slug.replace(/-/g, '');
      const mdContent = fs.readFileSync(programsDir + '/' + file, 'utf8');
      const program = { slug, title, searchKey, mdContent };
      programs.push(program);
    });

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
      const searchKey = slug.replace(/-/g, '');
      const mdContent = fs.readFileSync(questionsDir + '/' + file, 'utf8');
      const question = { slug, title, searchKey, mdContent };
      questions.push(question);
    });

    const topicObj = {};
    topics.sort();
    for (let topic of topics) {
      topicObj[topic] = [];
    }
    let contentArr = [...programs, ...questions];
    let topicKeys = Object.keys(topicObj);
    for (let key of topicKeys) {
      for (let c of contentArr) {
        if (c.searchKey.includes(key)) {
          topicObj[key].push(c);
        }
      }
    }
    res.json({ topics: topicObj });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
