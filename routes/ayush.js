var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});
router.get('/data', function(req, res, next) {
    res.send('boy');
  });
module.exports = router;
