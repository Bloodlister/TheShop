const baseRouter = require('./Routers/base.js');
const userRouter = require('./Routers/users');
const authRouter = require('./Routers/auth');

module.exports = function(app) {
   app.use('/', baseRouter);
   app.use('/auth', authRouter);
   app.use('/user', userRouter);
};