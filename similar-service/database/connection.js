
const mysql = require('mysql');


//DATABASE CONNECTION - this how we are able to make queries to our DB
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'similars_db',
  user: 'root'
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


module.exports = connection;