var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/set-cookie', function (req, res) {
  res
    .cookie('rememberme', '12222222', {
      maxAge: 9000000,
      httpOnly: true,
      sameSite: false,
      domain: 'http://localhost:3000',
    })
    .cookie('anotherone', '777777777799999999', {
      maxAge: 9000000,
      httpOnly: true,
      sameSite: false,
      domain: 'http://localhost:3000',
    })
    .cookie('anotheronetwo', '666666666666666', {
      maxAge: 9000000,
      httpOnly: true,
      sameSite: false,
      domain: 'http://localhost:3000',
    })

  res.send('Hola');
});

router.get('/read-cookie', function (req, res) {
  console.log('req.cookies.rememberme ', JSON.stringify(req.cookies));
  console.log('req.cookies ', JSON.stringify(req.cookies.rememberme));

  res
    .json({
      message: 'cookie read',
      rememberme: req.cookies.rememberme,
      anotherone: req.cookies.anotherone,
      anotheronetwo: req.cookies.anotheronetwo
    })
});

router.get('/test-cors', (req, res) => {
  res.json({
    message: 'Hurray!! You bypassed cors!!!',
    headers: req.headers,
  })
})

module.exports = router;
