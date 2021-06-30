const User = require("../model/userModel.js")

const userController = {}

//post request to /signup calls createUser
//needs to check if the user is already in the system
    //if they are - return an error saying the username already exists
    //if they are not - then create a user
userController.createUser = (req, res, next) => {
    // console.log(req.body)

    //this function is running twice, first it is creating the proper user, then it is finding an error on the second run because username already exists at that point
    let name = req.body.name
    let username = req.body.username
    let password = req.body.password
    if (!name || !username || !password || username.length === 0 || password.length === 0 || name.length === 0) {
        let errMessage = "Error: Must specify a name, username and password."
        console.log(errMessage)
        return res.status(400).json({error:errMessage})
    }
    User.findOne({ username : username }, (err, person) => {
        if (err) {
            let errMessage = "Error finding username in createUser function: "
            console.log(errMessage)
            return res.status(400).json({error:errMessage})
        }
        if (person) {
            //causing middleware error cannot set headers after they have already been sent, not returning out of this statement
            let errMessage = "Error: Username already exists, choose a unique username or go to login page."
            console.log(errMessage)
            return res.status(400).json({error:errMessage})
        }
        else {
            User.create({ name: name, username: username, password: password}, (err, person) => {
                if (err) {
                    let errMessage = "Error creating user: "
                    console.log(errMessage, err)
                    return res.status(400).json({error:errMessage})
                }
                res.locals.person = person
                return next()
            })
        }
    })
}

//get request to /login calls getUser
//needs to check if the user is already in the system
    //if they are - allow login and return the users data to be stored in state
    //if they are not - send a message to have them sign up
userController.getUser = (req, res, next) => {
    // console.log(req.body)
    let username = req.body.username
    let password = req.body.password
    if (!username || !password || username.length === 0 || password.length === 0) {
        let errMessage = "Must specify a username and password."
        console.log(errMessage)
        return res.status(400).json({error:errMessage})
    }
    User.findOne({ username: username })
        .then((person) => {
        if (password === person.password) {
            //this is running but then throwing an error, not returning back to loginRoutes file
            res.locals.person = person
            console.log("correct password", res.locals.person)
            return next()
        }
        else{
            let errMessage = "Incorrect password"
            console.log(errMessage)
            return res.status(400).json({error:errMessage})
        }
    })
        .catch((err) => {
            let errMessage = "Error finding username: "
            console.log(errMessage, err)
        })
}


module.exports = userController;