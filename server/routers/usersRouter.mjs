import {Router} from "express"
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"
import {database} from "../database/connectiondb.js"
import {mailNode} from "../utils/mailClient.mjs"

const usersRouter = Router()
const jwt = jsonwebtoken

usersRouter.post("/api/register-user", async (req, res) =>{
    const registerUser = {
        username: await bcrypt(req.body.username, 12),
        email: await bcrypt(req.body.useremail, 12),
        password: await bcrypt(req.body.password, 12)    
    }

    const sentMail = await mailNode(req.body.useremail)

    const insertUser = database.run(`INSERT INTO users(username, email, password) VALUES (?,?,?)`, 
    [registerUser.username, 
    registerUser.email, 
    registerUser.password]
    )
    
    if(insertUser){
        req.body.username
        req.body.useremail
        req.body.password

        res.status(201).redirect("/account", {data: {message: "registration successful."}})
    }
    else res.status(400).redirect("/account", {data: {message: "registration was not accepted."}})
})

usersRouter.post("/api/login", async (req, res) => {
    console.log(req.body)

    const user = {
        email : req.body.useremail, 
        password : req.body.password
    }

    const userLookup = await database.get("SELECT user FROM users WHERE email = ?;", [user.email])

    if(userLookup && await bcrypt.compare(user.password, userLookup.password)){
        delete req.body.useremail
        delete req.body.password

        res.status(200).redirect("/profile", {data: {username: userLookup.username}})
    }
    else res.status(401).send({data: {authorization: false}})
})

usersRouter.delete("/api/logout", async (req, res) => {
    req.body.session.destroy()
})

export default usersRouter