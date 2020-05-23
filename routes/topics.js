const { Router } = require('express');
const router = Router();
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const topics = require('../utils/topics');

router.get('/', async (req, res) => {
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
      const program = { slug, title, searchKey };
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
      const question = { slug, title, searchKey };
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
    res.render('topics', { topics: topicObj });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:topic', async (req, res) => {
  try {
    const topic = req.params.topic;

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

    let tPrograms = programs.filter((p) =>
      p.slug.replace(/-/g, '').toLowerCase().includes(topic)
    );
    let tQuestions = questions.filter((q) =>
      q.slug.replace(/-/g, '').toLowerCase().includes(topic)
    );
    let capTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

    res.render('topic', {
      topic: capTopic,
      programs: tPrograms,
      questions: tQuestions,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
