// DECLARATION
var express = require('express');
var router = express.Router();
var placeNames = require.main.require('./models/home-model');
var placeDetails = require.main.require('./models/details-model');

router.get('/', function(req, res){

	placeNames.getPlaceName(function(result){
		if(result != false)
		{
			//console.log(result);
			res.render('home/index',{result: result});
		}
		else
		{
			res.render('home/index',{msg: 'something went wrong!!'});
		}
	});
	
});

router.get('/place/:name', function(req, res){
	//console.log(req.params.name);
	placeDetails.getPlaceDetails(req.params.name,function(result){
		if(result != false)
		{
			res.render('home/info',{result: result});
		}
		else
		{
			res.render('home/info',{msg: 'something went wrong!!'});
		}
	});

});

module.exports = router;