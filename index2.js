const http=require('http');

const server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("<h1>I am Happy to learn full stack web development from PW skills!<h1>");
    }
    res.end();
});

server.listen(5000);
console.log("server start Succesfully!");