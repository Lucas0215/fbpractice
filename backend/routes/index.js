var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('......');
  console.log(__dirname);
  console.log('......');
  console.log(';;;;;');
  res.render('../frontend/public/index.html');
});

console.log('hihi');

module.exports = router;
