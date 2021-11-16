const mongoose = require('mongoose');
let Schema = mongoose.Schema;
//let mongooseUniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//name, username, password, email, address, phone, age, description, posts, followerIds, followingIds
let userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true, minlength: 6},
    email: {type: String, required: true, unique: true},
    followers: [{type: Schema.Types.ObjectId, ref: "User"}],
    following: [{type: Schema.Types.ObjectId, ref: "User"}],
    tokens:[{token:{type: String, require: true}}]
});

//unique field validation
//userSchema.plugin(mongooseUniqueValidator);

userSchema.virtual('myTweets',{
    ref: 'Tweet',
    localField: '_id',
    foreignField: 'userId'
});

userSchema.pre('save', async function(){
    let user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
});

userSchema.methods.toJSON = function(){
    const data = this.toObject();
    delete data.password
    delete data.__v
    delete data.tokens
    return data;
}

userSchema.statics.loginUser = async function(email, password){
    const user = await User.findOne({email: email});
    if(!user) throw new Error("Email not found");
    const isValidPass = await bcrypt.compare(password, user.password);
    if(!isValidPass) throw new Error("Invalid Password!");
    return user;
}

userSchema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET);
    user.tokens.push({token});
    await user.save()
    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;