const {v4:uuidv4} = require('uuid');
const fs = require('fs');

class UserServices{
    user=[];


    getUsers(){
        fs.writeFileSync('users.json',JSON.stringify(this.user));
        return fs.readFileSync('users.json');
    }
    addUser(newUser){
        this.user.push({id:uuidv4(),name:newUser});
        fs.writeFileSync('users.json',JSON.stringify(this.user));
        return fs.readFileSync('users.json');
    }
    getUserById(key){
        return this.user.filter(n=>n.id == key);
    }
    deleteUserById(key){
        fs.writeFileSync('users.json',JSON.stringify(this.user.filter(n=> n.id !== key)));
    }

    renameUserById(key,name){
        fs.writeFileSync('users.json',JSON.stringify(this.user.filter(n=>{
            if(n.id == key){
                n.name = name;
            }
            return this.user;
        })));
        return fs.readFileSync('users.json');
    }
}


module.exports = new UserServices();