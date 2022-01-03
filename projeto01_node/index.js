const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Carregando Pagina Inicial.')
});

app.listen(5000, () =>{
    console.log('server rodando!');
})