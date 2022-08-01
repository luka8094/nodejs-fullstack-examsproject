import {database} from "./connectiondb.js"
const drop = false

if(!drop) database.exec("DROP TABLE IF EXISTS users;")

//TODO: implement roles
database.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(70) NULL,
    email VARCHAR(70) NULL,
    password VARCHAR(70) NULL
);`)

database.run(`INSERT INTO users(username, email, password) VALUES ("BobWilliams","bwill@email.com","mysecretpassword");`)
database.run(`INSERT INTO users(username, email, password) VALUES ("FrankAdams", "franka@email.com", "mysecretteehee");`)

database.close()