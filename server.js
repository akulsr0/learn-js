const express = require('express');
const ejs = require('ejs');
const cors = require('cors');

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 3001;

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
app.use('/programs', require('./routes/programs'));
app.use('/questions', require('./routes/questions'));
app.use('/topics', require('./routes/topics'));
app.use('/search', require('./routes/search'));

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
