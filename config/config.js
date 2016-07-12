// leyendo archivo de configuraciones
var fs = require("fs");
 
 module.exports = function () {

   fs.readFile("./config.json","utf-8",
     function (err,content){
    if(err){
        console.log("> ERROR NO SE PUDO LEER" +
            "archivo de configuracion: config.json...");
        console.log("> Se carga configuracion" +
       "por defecto..." );
       return {
           IP: '127.0.0.1',
           PORT: 3030
       }
        //tomo alguna polotica
    }else{
        // Convirtiendo el json string
        // en un json objeto de json
        var configObj = JSON.parse(content);
        configObj.IP = process.env.IP || configObj.IP;
        config.PORT = process.env.PORT || CONFIGoBJ.port;
        // Exporto objeto de configuracion
        return configObj;
    }

  });

 }