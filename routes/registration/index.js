let express = require('express');
let router = express.Router();

router.get('/',function(req, res){
    res.send('this is registration page')
})

module.exports = router;