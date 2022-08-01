import {Router} from "express"
import jsonwebtoken from "jsonwebtoken"
import {database} from "../database/connectiondb.js"
import {mailNode} from "../utils/mailClient.mjs"

const usersRouter = Router()
const jwt = jsonwebtoken

usersRouter.get("/api/users", async (req, res) =>{
    const users = await database.all(`SELECT * FROM users;`)
    console.log(users)

    res.send(users)
})

usersRouter.post("/api/register-user", async (req, res) =>{
    console.log(req.body)

    const sentMail = await mailNode(req.body.useremail)
    console.log(sentMail)

    res.redirect("/")
})

usersRouter.post("/api/login", async (req, res) => {
    console.log(req.body)

    res.redirect("/")
})

usersRouter.delete("/api/logout", async (req, res) => {
    
})

export default usersRouter