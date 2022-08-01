const {json} = require("express")
const jwt = require("jsonwebtoken")

exports.token = (req, res) => {
    //grab the refresh token from the incoming request body
    const refreshToken = req.body.token

    //is the refresh token empty?
    if(refreshToken === null) return res.status(401).send('unauthorized')
    //does the refresh token even exist?
    if(!refreshTokens.includes(refreshToken)) return res.status(401).send('unauthorized')

    //if its passed all the initial evaluation gates, verify it
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
        //catch a potential error and forbid retrieval
        if(err) return res.status(403).send('forbidden')

        //if everything checks out - regenerate the access token
        const accessToken = generateAccessToken({user: user.name})

        res.json({data : {at : accessToken}})
    })
}

exports.logout = async (req, res) => {
    try{
       const user = {name: req.body.name, password: req.body.password}
       /*
       //assert user identication
       if(await bcrypt.compare(req.body.password, user.password)){
       /*
       //does the user exist?
       const user = allUsers.find(user => user.name === req.body.name)
       */

       //serialize user with access token
       const accessToken = generateAccessToken(user)
       //refresh the access token for the user
       const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
       //save the refreshToken
       refreshTokens.push(refreshToken)

       //the user was not found in the database
       if(user === null) return res.status(400).send('bad request')

       res.json({data : {at: accessToken, rt: refreshToken}})
       
       /*
        //permit access ("at" : "access token", "rt" : "refresh token", "msg" : "message" )
           res.json({data :{at : accessToken, rt: refreshToken, msg: "access granted"}})
       */
       /*
       }else{

           //deny access
           res.send({data : "access denied"})
       }
       */
   }catch(err){
       res.status(500).send('internal server error')
   }
}

exports.login = (req, res) =>{
    refreshTokens = refreshTokens.filter(refreshToken => refreshToken !== req.body.token)
    res.status(204).send('token has succesfully been removed')
}