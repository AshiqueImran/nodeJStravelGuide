// DECLARATION
var express = require('express');
var router = express.Router();
var findExistEmail = require.main.require('./models/findExistEmail');


router.get('/', function(req, res){
	res.render('reg/index');
});

router.post('/', function(req, res){
	//console.log(req.body.email+"/n "+ req.body.password);
	var user = {
		email: req.body.email,
		password: req.body.password,
		confirmPass: req.body.pass,
		name: req.body.name
	};
	if(user.password!=user.confirmPass)
	{
		res.render('reg/index',{msg: 'confrim password did not match!'});
	}
	else{
		findExistEmail.findTheUserExits(user, function(valid){
			if(valid)
			{
				res.render('reg/index',{msg: 'Email already exist'});
			}
			else
			{
				console.log("works");
			}
	});
}

});

module.exports = router;