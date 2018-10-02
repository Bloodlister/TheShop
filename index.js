const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const mongoose = require('mongoose');

const routing = require('./routes');
const middleware = require('./middleware');


const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/Templates'));

app.use(express.static('public'));
app.use(session({
    store: new SQLiteStore,
    secret: 'ouaBASsdgv89asgAVBBAkjhasgdv976asgdv',
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000},
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//Setting Middleware
middleware(app);

//Setting Routing
routing(app);

mongoose.connect('mongodb://shop_admin:a123456@ds219983.mlab.com:19983/the_fast_shop')
    .then(() => {
        app.listen(port, () => console.log(`Listening on ${port}`));
    }
);

