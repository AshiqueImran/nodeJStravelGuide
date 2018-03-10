// DECLARATION
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('home/index');
});

router.post('/', function(req, res){
	console.log(req.body.email+"/n "+ req.body.password);
});

module.exports = router;