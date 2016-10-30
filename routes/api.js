var express = require('express');
var router = express.Router();

router.route('/message')
/* GET message listing. */
  .get(function(req, res, next) {
    res.send('respond with message list');
  });
  router.route('/users')
  /* GET users listing. */
    .get(function(req, res, next) {
      res.send('respond with user list');
    });
module.exports = router;
