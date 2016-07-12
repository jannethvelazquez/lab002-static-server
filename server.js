// http
var http = require("http");
var fs= require('fs');
var config = require("./config/config.js");
//
//
var PORT = config.env.PORT;
var IP = config.env.IP;
if (IP=='127.0.0.1'){
    console.log(">----EJECUTANDO EN MODO LOCAL");
}

//
var server = http.createServer(function(req, res){
    //
    //
    res.writeHead(200,{
        "Content-Type" : "text/plain",
        "Server" : "ITGAM@4.2.4"
    });
    //lectura
    fs.readFile('./static/index.html',
    'utf8',function(err, content){
        if(err){
        res.write("<h1>ERROR DE LECTURA</h1>");

        }else{
             res.end(content);
        }
    });
   
});
//poner a trabajar al server
server.listen(PORT,IP,function(){
    console.log(`>Server listering @http://${IP}:${PORT}...`);

});