const express = require('express');

const userController = require('../controllers/userController');

const signupRouter = express.Router();

signupRouter.post('/', userController.createUser, (req, res) => {
  console.log(res.locals.person);
  res.status(200).json(res.locals.person);
});

module.exports = signupRouter;
