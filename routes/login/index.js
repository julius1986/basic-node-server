var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    res.locals.title = "login";
    next();
});

router.get('/', function(req,res,next){
    res.render('login')
})

router.post('/', function(req, res, next){
    res.render('login');
})

module.exports = router;