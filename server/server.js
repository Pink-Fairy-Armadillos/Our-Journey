const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
// const cors = require('cors');

// app.use(cors());

// app.use('/Login', (req, res) => {
//   res.send({
//     token: 'edd'
//   })
// })

app.use(express.json()); //testing

const apiRouter = require('./routes/apiRoutes');
const loginRouter = require('./routes/loginRoutes');
const signupRouter = require('./routes/signupRoutes');

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', apiRouter);

app.use('/login', loginRouter);

app.use('/signup', signupRouter);

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj);
});

app.listen(PORT, () => {
  console.log('Server Listening on port 3000');
});
