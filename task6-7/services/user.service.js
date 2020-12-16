
const User = require('../models/user.model');



class UsersServices{

    
    login=(login,password)=>{
       
    }
    
    getUsers(){
         User.find({},(err,docs)=>{
            return docs;
        });
    }

    addUser(newUser){
         return new User(newUser).save();
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