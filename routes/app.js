var express = require('express');
var router = express.Router();
let path = require('path');

/* GET home page. */
router.get(['/', '/*'], function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/build', 'index.html'));
});

module.exports = router;