const calendarRouter = require('express').Router();

calendarRouter.route('/').get((req, res) => {
  res.end('Calendar Router GET');
})

module.exports = calendarRouter;