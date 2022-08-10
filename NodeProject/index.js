const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;


//Criar novo Arquivo

fs.writeFile('.RhemaCODE.txt','testando teste 1,2,3',function(err){
    if(err) throw err;
    console.log('o arquivo de teste foi criado com sucesso !')
})

//Criar novo arquivo ou inserir o conteudo depois do que ja existe.




const server = http.createServer((req,res)=>{

    if(req.url == '/.RhemaCODE'){

        fs.readFileSync('index.html', function(err,data){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            return res.end();
        })

    }else{
        //return
    }
})

server.listen(port, hostname,()=>{
    console.log("Servidor está Rodando!")
})