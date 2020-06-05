const { Router } = require('express');
const router = Router();
const marked = require('marked');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const hljs = require('highlight.js');
const { questions } = require('../utils/gto');

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

module.exports = router;
