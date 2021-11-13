const mongoose = require('mongoose');


mongoose.connect(process.env.DBURL, {});

mongoose.connection.on('connected', () => {
    console.log('connection to mongodb is now open!');
});

mongoose.connection.on('error', err => {
    console.log(err.message);
})
