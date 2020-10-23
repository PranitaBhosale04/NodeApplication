var h = require('http');

var server = h.createServer(function(req,res){
   if(req.url == '/')
   {
       res.writeHead(200,{'Content-Type':'text/html'});
       res.write("<h1> Welcome to Node </h1>");	
       res.write("<h2>Learning<ul><li>AWS</li><li>GITHUB</li><li>DOCKER</li></ul></h2>");
       res.end();
   }
   if(req.url == '/home')
   {
       res.writeHead(200,{'Content-Type':'text/html'});
       res.write("<h1> Hello </h1>");
       res.end();
   }
   if(req.url == '/info')
   {
       res.writeHead(200,{'Content-Type':'text/html'});
       res.write("<h1> Information </h1>");
       res.end();
    }
   
});

server.listen(8100);

console.log("Server started on port 8100");