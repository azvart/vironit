const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const usersRouter = require('./routes/users.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',usersRouter);



app.listen(port,()=>{
    console.log(`Server running on port:${port}`);
});
