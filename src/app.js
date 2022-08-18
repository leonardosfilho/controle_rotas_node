import express from  'express';


const app = express();

app.use(express.json());

const clientes = [
    {id:1,nome:'Leonardo',cpf:'123.456.789-10'},
    {id:2,nome:'Pedro',cpf:'123.456.789-10'},
]

const funcionarios = [
    {id:1,nome:'Leonardo',cpf:'123.456.789-10'},
    {id:2,nome:'Pedro',cpf:'123.456.789-10'},
    {id:3,nome:'Carlos',cpf:'123.456.789-10'},
    {id:4,nome:'Arthur',cpf:'123.456.789-10'},
]
// rota principal
app.get('/',(req,res)=>{
    res.status(200);
    res.send('Pagina inical');
    // ou colocar res.status(200).send('pagina inicial');
});
//consultar todos os clientes
app.get('/clientes',(req,res)=>{
    res.status(200);
    res.json(clientes);
});

app.get('/funcionarios',(req,res)=>{
    res.status(200);
    res.json(funcionarios);
});

// cadastrar novo cliente
app.post('/clientes',(req,res)=>{
    clientes.push(req.body);
    res.status(200).send('Cliente cadastrado com sucesso!');
})
app.post('/funcionarios',(req,res)=>{
    funcionarios.push(req.body);
    res.status(200).send('Cliente cadastrado com sucesso!');
});




export default app