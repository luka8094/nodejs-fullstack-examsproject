const {database} = require("../../../database/manager/dbConnection")
const bcrypt = require("bcrypt")

//get all users
exports.all = async (req, res) =>{
    const usersResult = await database.all("SELECT * FROM users;")
    res.send({data: usersResult})
}

//create a new user
exports.create = async(req, res) =>{
    const newUser = {
        name: req.body.name, 
        email: req.body.email, 
        password: await bcrypt.hash(req.body.password)
    }

    if(await database.get(`SELECTE user FROM users WHERE name = ?`, [newUser.name]))
        delete req.body.password
        res.status(409).send("user already exists")
    
    const {changes} = await database.run(`
        INSERT INTO users (name, email, password) 
        VALUES (?, ?, ?)
    `, [newUser.name, newUser.email, newUser.password])

        delete req.body.password

    if(changes === 1) res.status(204).send("user was created")
    else res.status(500).send("internal server error")
}

//update an user
exports.update = async(req, res) =>{
    const userResult = await database.get(
        `SELECT user FROM users 
        WHERE name = ?
        `, [req.body.name])
    
    console.log(userResult)

    if(usersResult.id)
        const newEmail = req.body.email ?? userResult.email
        const newPassword =  
            (req.body.password || typeof(req.body.password) != 'undefined' ? await bcrypt.hash(req.body.password, 12) : null) 
                ?? userResult.password 

        const {changes} = await database.run(`
            UPDATE users SET email = ?, password = ?
            WHERE id = ?
        `,[newEmail, newPassword, userResult.id])
        
        if(changes === 1) res.status(202).send({data: { user: userResult.id, msg: "changes were successful"}})

    else res.status(400).send("invalid request")
}

//delete an user
exports.delete = async(req, res) =>{
    console.log("connected to usersDataRouter.delete(...)")
}

