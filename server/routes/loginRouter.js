const loginRouter = require('express').Router();

loginRouter.route('/').get((req, res) => {
  res.end('Login Router GET');
})

module.exports = loginRouter;