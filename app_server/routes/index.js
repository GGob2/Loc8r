var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express & Nodemon by 2018250001 강명조' });
});

module.exports = router;
