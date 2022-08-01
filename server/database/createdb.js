import {database} from "./connectiondb.js"
import bcrypt from "bcrypt"
const drop = false
const salt = 12


;( async => {
    if(!drop) database.exec("DROP TABLE IF EXISTS users;")

    //TODO: implement roles
    database.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(70) NULL,
        email VARCHAR(70) NULL,
        password VARCHAR(70) NULL
    );`)

    database.run(`INSERT INTO users(username, email, password) VALUES (
        ${bcrypt.hash("Admin", salt)}, 
        ${bcrypt.hash("LSMadmin@securemail.com", salt)},
        ${bcrypt.hash("superpass", salt)});`)
    database.run(`INSERT INTO users(username, email, password) VALUES (
        ${bcrypt.hash("FrankAdams", salt)}, 
        ${bcrypt.hash("franka@email.com", salt)}, 
        ${bcrypt.hash("mysecretteehee", salt)});`)
    database.run(`INSERT INTO users(username, email, password) VALUES (
        ${bcrypt.hash("BobWilliams", salt)},
    ${bcrypt.hash("bwill@email.com", salt)},
    ${bcrypt.hash("mysecretpassword", salt)});`)

    database.close()
})