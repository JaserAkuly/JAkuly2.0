var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function (req, res, next) {
    res.sendfile(__dirname + '/public/index.html')
});

module.exports = router;
