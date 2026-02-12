// all the Package Includes 
require("dotenv").config();
const express = require("express");
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const path = require('path');

const connectDB = require('./server/config/db')
connectDB();





// app initialzation 
const app = express();
const port = process.env.PORT;


// Public Files Listening 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//template engine 
app.use(expressLayout);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');


// route file listening
app.use('/', require('./server/routes/main'));
// app.use('/uploads', express.static('uploads'));








//app start listening here 
app.listen(port, () => {
    console.log("start wa pai")
});