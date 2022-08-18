//const http = require('http');
// modulo http como também tem o modo file
import app from './src/app.js';
const port = 8000;
/*const rota = {
    '/':'Pagina principal',
    '/cadastro':'Cadastro de Clientes',
    '/consulta': 'consular Clientes'
}*/
//resposta e requisição
/*const server = http.createServer((req,res)=>{
    res.status(200).res.send('Pagina inical')
});*/

app.listen(port,()=>{
    console.log(`Servidor roda no endereço http://localhost:${port}`)
});