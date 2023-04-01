// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "learnnodejs",
});

// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "test",
//   Promise: bluebird,
// });

// const [rows, fields] = await connection.execute("SELECT * FROM `table`");
// simple query

// with placeholder

export default connection;
