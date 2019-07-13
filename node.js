const http = require('http');

var server = http.createServer(function(req,res){

 if (req.url==='/') {
   res.end("<h1>Hello World</h>")
 }
 if (req.url==='/numbers') {

   res.end("<html><script>var i=0;while (i<100){i++;document.write(i);}</script></html>");
 }


}).listen(9000,console.log('server running...'))
