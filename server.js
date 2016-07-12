// http
var http = require("http");
// crear un servidor basico
var server = http.createServer(function(req,res){
    //
    //
    res.whiteHead(200,{
        "Content-Type" : "text/plain",
        "Server" : "ITGAM@4.2.4"
    });
    //
    res.white("hola mundo");
    //
    res.end();
});
//poner a trabajar al server
server.listen(3000, '127.0.0.1',function(){
    console.log(">Server listering @http://localhost:3000...");

});