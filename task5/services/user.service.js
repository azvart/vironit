const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({name:String},{versionKey:false});
const User = mongoose.model('Users',userSchema);


class UsersServices{

    
    getUsers(){
       User.find({},(err,docs)=>{
        console.log(docs);   
      })
    }

    addUser(newUser){
         return new User({name:newUser}).save();
    }
    getUserById(key){
        return User.findOne({_id:key},(err,docs)=>{
            console.log(docs);
        });
    }
    deleteUserById(key){
        return User.findOneAndDelete({_id:key},(err,docs)=>{
            console.log(docs);
        });
    }
    renameUserById(key,updateName){
        return User.findOneAndUpdate({_id:key},{$set:{name:updateName}},{returnOriginal:false},(err,docs)=>{
            console.log(docs);
        });
    }
}


module.exports = new UsersServices();