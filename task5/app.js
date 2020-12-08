const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Schema = mongoose.Schema;
const port = 3000;
const usersRouter = require('./routes/users.routes');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',usersRouter);


mongoose.connect('mongodb://localhost:27017/Person',{useNewUrlParser:true,useUnifiedTopology:true},()=>{

    app.listen(port,()=>{
        console.log(`Server running on port:${port}`);
    });
    
});
