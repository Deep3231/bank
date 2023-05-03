var mysql = require('mysql');
var connection = mysql.createConnection({

	multipleStatements: true,
	host     : 'mysql-124501-0.cloudclusters.net',
	user     : 'admin',
	password : 'gAn4bJTi',
	database : 'paynum',
	port:'17868'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected :)");
} else {
    console.log("Error while connecting with database :(");
}
});
module.exports = connection; 