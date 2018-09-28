const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./Routers/users');
const authRouter = require('./Routers/auth');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Listening on ${port}`));