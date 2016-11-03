var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var post = mongoose.model('message');

router.route('/message')
/* GET message listing. */
  .get(function(req, res, next) {
    res.send('respond with message list');
  })
  .post(function(req, res, next) {
    res.send('post a message');
  });
  
router.route('/users')
/* GET users listing. */
  .get(function(req, res, next) {
    res.send('respond with user list');
  });
module.exports = router;
