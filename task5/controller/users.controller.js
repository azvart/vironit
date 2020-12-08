const UsersServices = require('../services/user.service');


class UsersController{
    constructor(){
        this.get = this.get.bind(this);
        this.add = this.add.bind(this);
        this.getId = this.getId.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.rename = this.rename.bind(this);
    }
    service = UsersServices;

    get=(req,res)=>{
        res
            .status(200)
            .send(JSON.stringify(this.service.getUsers()));
    }
    getId = (req,res)=>{
        res
            .status(200)
            .send(this.service.getUserById(req.params.id));
    }
    deleteUser =(req,res)=>{
        res
            .status(200)
            .send(this.service.deleteUserById(req.params.id));
    }
    add =(req,res)=>{
        res
            .status(200);
            req.on('data',data=>{
                res.send(this.service.addUser(String(data)));
            });
            
    }

    rename =(req,res)=>{
        res.status(200);
        // req.on('data',data=>{
        //     res.send(this.service.renameUserById(req.params.id,String(data)));
        // });
        res.send(this.service.renameUserById(req.params.id,req.body.name));
    }
}


module.exports = new UsersController();