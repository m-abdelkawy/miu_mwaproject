require('dotenv').config();
require('../models/dbconnection');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/seedusers', (req, res)=>{

})

module.exports = app;
