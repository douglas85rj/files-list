
const fs = require('fs');
const path = require('path');

var raiz = './files';
var data = {};
var aux = 0;

function listaDeArquivos(base){
    var pastas = fs.readdirSync(base);

    for (p in pastas){
        var caminho = path.join(base,pastas[p]);
        var stats = fs.lstatSync(caminho);

        if(stats.isDirectory()){
 listaDeArquivos(caminho);
        }else{
data[aux] = {
    nome: path.basename(caminho),
    tamanho: stats.size+'bytes',
    modificação: stats.ctime

};

aux += 1;
        }
    }
}

listaDeArquivos(raiz);
console.log(data);