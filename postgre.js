var pg = require('pg');
var connectionString = "postgres://postgress:syntek132@postgres/localhost:5432/postgres";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

var query = pgClient.query("SELECT * FROM employeeinformation");

console.log(query)