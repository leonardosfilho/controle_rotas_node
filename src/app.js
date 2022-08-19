import express from  'express';


const app = express();

app.use(express.json());

const clientes = [
    {id:1,nome:'Leonardo',cpf:'123.456.789-10'},
    {id:2,nome:'Pedro',cpf:'123.456.789-10'},
]
/*
const funcionarios = [
    {id:1,nome:'Leonardo',cpf:'123.456.789-10'},
    {id:2,nome:'Pedro',cpf:'123.456.789-10'},
    {id:3,nome:'Carlos',cpf:'123.456.789-10'},
    {id:4,nome:'Arthur',cpf:'123.456.789-10'},
]*/
// rota principal
app.get('/',(req,res)=>{
    res.status(200);
    res.send('Pagina inical');
    // ou colocar res.status(200).send('pagina inicial');
});

app.get('/clientes/:id',(req,res)=>{
    let index = buscarCliente(req.params.id); /// params verifica toda a url
    res.json(clientes[index]);
});

//consultar todos os clientes
app.get('/clientes',(req,res)=>{
    res.status(200);
    res.json(clientes);
});
/*
app.get('/funcionarios',(req,res)=>{
    res.status(200);
    res.json(funcionarios);
});*/

// cadastrar novo cliente
app.post('/clientes',(req,res)=>{
    clientes.push(req.body);
    res.status(200).send('Cliente cadastrado com sucesso!');
});


//função que realiza a busca por id

function buscarCliente(id){
    return clientes.findIndex(cliente => cliente.id == id)
};

//Atualizar clientes
app.put('/clientes/:id',(req,res) =>{
    let index = buscarCliente(req.params.id);
    clientes[index] = req.body;
    res.json(clientes);

});

app.delete('/clientes/:id',(req,res) =>{
    let index = buscarCliente(req.params.id);
    clientes.splice(index,1);
    res.send('Cliente excluido com sucesso!');
    res.json(clientes);
})








/*
app.post('/funcionarios',(req,res)=>{
    funcionarios.push(req.body);
    res.status(200).send('Cliente cadastrado com sucesso!');
});

*/


export default app