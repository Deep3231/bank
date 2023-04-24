var mysql = require('mysql');
var connection = mysql.createConnection({

	multipleStatements: true,
	host     : 'mysql-123082-0.cloudclusters.net',
	user     : 'admin',
	password : 'J4lcZVEe',
	database : 'paynum',
	port:'18318'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected :)");
} else {
    console.log("Error while connecting with database :(");
}
});
module.exports = connection; 