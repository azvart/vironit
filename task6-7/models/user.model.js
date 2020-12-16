const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    name:String,
    password:String,
    avatar:String
    },
{versionKey:false});
const User = mongoose.model("Users",userSchema);







module.exports = User;