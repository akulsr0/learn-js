const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3001;

app.use('/', require('./routes/index'));
app.use('/programs', require('./routes/programs'));
app.use('/questions', require('./routes/questions'));
app.use('/search', require('./routes/search'));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
