// leyendo archivo de configuraciones
var fs = require("fs");

module.exports = function () {

  fs.readFile("./config.json","utf-8",
 function(err,content){
     if(err){
         console.log(">ERROR: NO SE PUDO LEER" +
           "archivo de configuracion: config.json..." );
           console.log("> Se carga configuracion"+ 
             "por defecto...");
             return {
                 IP: '127.0.0.1',
                 PORT: 3030
             }
         //
       }else{
           //
           //
           var configObj = JSON.parse(content);
           configObj.IP = process.env.IP || configObj.IP;
           configObj.PORT = process.env.PORT || config.Obj.PORT;
           //
           return configObj;
       }
 });
}


