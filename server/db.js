import {createPool} from "mysql2/promise";
// docs : https://sidorares.github.io/node-mysql2/docs

// database connection
export const pool = new createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "42742379",
    database: "taskdb"
});



