var express = require('express');
var router = express.Router();
var cnblog = require('../cnblog.js');
var requestUrl=  'https://cnodejs.org/';
/* GET home page. */
router.get('/', function(req, res, next) {
    var page=req.query.page;
    var tab=req.query.tab;
    console.log(page,tab);
    if(page!=undefined){
        requestUrl='https://cnodejs.org/?tab='+tab+'&page='+page;
    }
    var blog=new cnblog(requestUrl);
    blog.getData(res);

});

module.exports = router;
