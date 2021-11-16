const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//title, body, user
let tweetSchema = new Schema({
    content: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref:"User", required: true},
    userName: {type: String, required: true}
},
{ timestamps: true });

module.exports = mongoose.model('Tweet', tweetSchema);