const todoListRouter = require('express').Router();

todoListRouter.route('/').get((req, res) => {
  res.end('Todo List Router GET');
})

module.exports = todoListRouter;