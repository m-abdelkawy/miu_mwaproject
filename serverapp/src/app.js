require('dotenv').config();
require('../models/dbconnection');

const express = require('express');
const cors = require('cors');
const path = require('path');

const exphbs = require('express-handlebars');



const app = express();



//#region handlebars
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
//#endregion

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
const userRoutes=require('../routes/user.routes');
const tweetRoutes = require('../routes/tweet.routes');
app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);





app.get('/hello', (req, res)=>{
    res.json({success: 1});
})

app.post('/seedusers', (req, res)=>{

})

module.exports = app;
