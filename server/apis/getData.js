const express = require('express')
const router  = express.Router();

router.get('/getdata',function(req, res){
    res.json(null)
})
module.exports = router