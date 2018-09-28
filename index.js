const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/Templates'));


app.use(cookieParser());
app.use(session({
   secret: 'This is interesting',
   resave: true,
   saveUninitialized: true
}));
app.use(bodyParser.json({type: 'application/*+json'}));

app.use(function(req, res, next) {
   if(req.session.page_views === undefined) {
      req.session.page_views = 0;
   } else {
      req.session.page_views++;
   }
   next();
})


const baseRouter = require('./Routers/base.js');
const userRouter = require('./Routers/users');
const authRouter = require('./Routers/auth');

app.use('/', baseRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Listening on ${port}`));