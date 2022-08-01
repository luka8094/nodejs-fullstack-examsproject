import sqlite3 from "sqlite3"
import {open} from "sqlite"

export const database = await open({
    filename: './database/users.db',
    driver: sqlite3.Database
})
