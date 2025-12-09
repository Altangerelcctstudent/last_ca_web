const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pass2025146",
    database: "ag_shop"
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

module.exports = db;
