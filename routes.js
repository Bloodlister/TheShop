const baseRouter = require('./Routers/base');
const userRouter = require('./Routers/users');
const authRouter = require('./Routers/auth');
const cartRouter = require('./Routers/cart');

module.exports = function(app) {
   app.use('/', baseRouter);
   app.use('/', authRouter);
   app.use('/user', userRouter);
   app.use('/cart', cartRouter);
};