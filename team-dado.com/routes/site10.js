var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site10', { title: 'Express' });
});

module.exports = router;
