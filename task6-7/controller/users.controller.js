// const UsersServices = require('../services/user.service');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UsersController{
    constructor(){
        this.login = this.login.bind(this);
        this.get = this.get.bind(this);
        this.login= this.login.bind(this);

        this.addUser = this.addUser.bind(this);
    }
    



    addUser =(req,res)=>{
        const hash = bcrypt.hashSync(`${req.body.password}`,1);
        const userName = req.body.name;
        const user = new User({name:userName,password:hash,avatar:req.file.path}).save();
        res.send(user);
    }

    login=(req,res)=>{
        const login = req.body.login;
        const password = req.body.password;
        User.find({name:login}).exec((err,docs)=>{
            const verifyPassword = bcrypt.compareSync(password,docs[0].password);
            if((login === docs[0].name)&&(verifyPassword === true)){
                const token = jwt.sign({login:login,password:docs[0].password},'secret');
                res.send(token);
            }
        });
       
    }

    get =(req,res)=>{
        User.find({}).exec((err,docs)=>{
            res.send(docs);
        });
    }

    me =(req,res)=>{
        const [strategy,token] = req.headers['authorization'].split(' ');
        const decode = jwt.decode(token,{complete:true});
        console.log(decode.payload.login);
        User.find({name:decode.payload.login,password:decode.payload.password}).exec((err,docs)=>{res.send(docs)});
    }
    update=(req,res)=>{
        const hash = bcrypt.hashSync(`${req.body.password}`,1);
        const [strategy,token] = req.headers['authorization'].split(' ');
        const decode = jwt.decode(token,{complete:true});
        const user = {
            name:req.body.name,
            password:hash,
            avatar:req.file.path
        }
        User.findOneAndUpdate({name:decode.payload.login,password:decode.payload.password},user,{new:true},(err,docs)=>{
            
            const token = jwt.sign({login:req.body.name,password:hash},'secret');
            res.send(docs);
        });
    }

  
}


module.exports = new UsersController();