const express = require('express');

const userController = require('../controllers/userController');

const loginRouter = express.Router();

loginRouter.post('/', userController.getUser, (req, res) => {
  console.log(res.locals.person);
  res.status(200).json(res.locals.person);
});

module.exports = loginRouter;
