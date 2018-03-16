// DECLARATION
var express = require('express');
var router = express.Router();

var bestPlaces = require.main.require('./models/bestPlaces-model');
var bookingPlaces = require.main.require('./models/bookingPlaces-model');
var bestMember= require.main.require('./models/bestMember-model');
var confirmBook= require.main.require('./models/confirmBook-model');

router.get('/', function(req, res){

	res.render('admin/home',{msg: req.session.loggedAdmin});
});

router.get('/list', function(req, res){

		bookingPlaces.bookedPlaces(function(result){
		if(result != false)
		{
			//console.log(result);
			res.render('admin/list',{result: result});
		}
		else
		{
			res.render('admin/list',{msg: 'something went wrong!!'});
		}
	});
});

router.get('/list/id/:id', function(req, res){
	//console.log(req.params.id);
	confirmBook.confirm(req.params.id,function(result)
		{
			if(result != false)
			{
				res.redirect('/adminHome/list');
			}
			else
			{
				res.render('admin/home',{msg: 'Sorry!! could not update'});
			}
		});
});

router.get('/bestPlaces', function(req, res){

	bestPlaces.places(function(result){
		if(result != false)
		{
			//console.log(result);
			res.render('admin/bestPlaces',{result: result});
		}
		else
		{
			res.render('admin/bestPlaces',{msg: 'something went wrong!!'});
		}
	});
});

router.get('/bestMember', function(req, res){

		bestMember.members(function(result){
		if(result != false)
		{
			//console.log(result);
			res.render('admin/bestMember',{result: result});
		}
		else
		{
			res.render('admin/bestMember',{msg: 'something went wrong!!'});
		}
	});
});

router.get('/newAdmin', function(req, res){

	res.render('admin/home',{msg: req.session.loggedAdmin});
});



module.exports = router;