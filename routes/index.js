var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arrange'});
});
router.get('/explore', function(req, res, next) {
  res.render('explore', { title: 'Arrange'});
});
router.get('/:username', function(req, res, next) {
  res.render('profile', { title: 'Arrange'});
});

module.exports = router;
