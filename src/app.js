require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const flash = require('connect-flash');

const dashboard = require('./routes/dashboard');
const errors = require('./routes/errors');

app.use(express.static('node_modules'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(morgan('dev'));
app.use(flash());

app.use('/', dashboard);
app.use(errors);

app.listen(process.env.APP_SERVER_PORT);
