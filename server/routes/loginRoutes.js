const express = require('express');

const userController = require('../controllers/userController');

const loginRouter = express.Router();

loginRouter.post('/', userController.getUser, (req, res) => {
    res.status(200).send(res.locals.person)
  })

  
module.exports = loginRouter;