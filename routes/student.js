var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req)
  res.json({name:"ayush"})
});
router.get('/:da', function(req, res, next) {
    console.log(req.params)
    res.json({name:req.params.da})
});

module.exports = router;