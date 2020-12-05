const http = require('http');
const port = 3000;
let user = [{
    name:'Vlad'
},

];


 http.createServer((req,res)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     
      switch(req.method){
          case "GET":
           res.end(JSON.stringify(user));
           break;
        case "POST":
           
            req.on('data',(data)=>{
                let newUser = {
                    name: String(data)
                }
                user.push(newUser);
            });
            res.end(JSON.stringify(user));
            break;
        case "PUT":
            req.on('data',(value)=>{
                user = String(value);
                res.end(JSON.stringify(user));
            });
        break;
           
      }  

      res.end();
     
 
}).listen(port,()=>{
    console.log(`Server listenin on port: ${port}`);
});