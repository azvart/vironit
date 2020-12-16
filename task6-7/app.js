const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const {v4:uuid} = require('uuid');
const app = express();

const port = 3000;
const usersRouter = require('./routes/users.routes');



app.use('/public',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',usersRouter);


mongoose.connect('mongodb://localhost:27017/Person',{useNewUrlParser:true,useUnifiedTopology:true},()=>{

    app.listen(port,()=>{
        console.log(`Server running on port:${port}`);
    });
    
});


