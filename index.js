const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const routing = require('./routes');
const middleware = require('./middleware');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/Templates'));

app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
   secret: 'ouaBASsdgv89asgAVBBAkjhasgdv976asgdv',
   resave: true,
   saveUninitialized: true
}));
app.use(bodyParser.json({type: 'application/*+json'}));

//Setting Middleware
middleware(app);

//Setting Routing
routing(app);

app.listen(port, () => console.log(`Listening on ${port}`));