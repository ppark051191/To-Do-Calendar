const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const loginRouter = require('./routes/loginRouter.js');
const todoListRouter = require('./routes/todoListRouter.js');
const calendarRouter = require('./routes/calendarRouter.js');

app.use('/login', loginRouter);
app.use('/todoList', todoListRouter);
app.use('/calendar', calendarRouter);

app.get('/', (req, res) => {
  res.send('GET request');
});

app.post('', (req, res) => {
  res.send('POST request');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

