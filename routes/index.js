var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/set-cookie', function (req, res) {
  res
    .cookie('rememberme', '12222222', { maxAge: 9000000, httpOnly: true })

  res.send('Hola');
});

router.get('/read-cookie', function (req, res) {
  console.log('req.cookies.rememberme ', JSON.stringify(req.cookies));
  console.log('req.cookies ', JSON.stringify(req.cookies.rememberme));

  res
    .json({
      message: 'cookie read',
      cookie: req.cookies.rememberme
    })
});

module.exports = router;