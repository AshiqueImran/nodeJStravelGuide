var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'tiger',
  password: '',
  database: 'travelguide'
});

module.exports = {
	getData: function(sql, param, callback){
		if(param == null)
		{
			connection.query(sql, function(err, res){
				if(err)
				{
					console.log(err);
					callback(null);
				}
				else
				{
					callback(res);
				}
			});
		}
		else
		{
			connection.query(sql, param, function(err, res){
				if(err)
				{
					console.log(err);
					callback(null);
				}
				else
				{
					callback(res);
				}
			});
		}

	}
};