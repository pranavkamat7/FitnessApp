const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Pranav@123777",
    host: "localhost",
    port: 5432,
    database: "roshanfitness"

});

module.exports = pool;