var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log('get');
  console.log(req);
  res.send(req);
});

router.post('/', function(req, res) {
  console.log('post');
  console.log(req.body);
  console.log(req.params);
  res.send(req.body);
});


module.exports = router;
