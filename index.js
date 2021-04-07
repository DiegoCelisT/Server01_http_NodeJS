// const http = require ('http') // já não precisarei mais do módulo http
const colors = require ('colors')

//Agora vou usar o módulo express:
const express = require ('express')
const app = express ()

//Usando Sequelize com SQLite:
const { Sequelize, DataTypes } = require('sequelize');
const user = require('./models/user'); //ELIMINAR?
const peixe = require('./models/peixe'); //ELIMINAR?

//Especificação do banco de dados que vai usar-se:
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './task-list.db'
  });

//Importando o arquivos user.js e peixe.js criados com o sequelize-cli
const User = require ('./models/user');
const Peixe = require ('./models/peixe');

//Para fazer a conexão entre o modelo e nossa Base de dados:
const users = User (sequelize, DataTypes);
const peixes = Peixe (sequelize, DataTypes);

//Interface usando ejs como plug-in do express:
app.set ('view engine', 'ejs')

app.get ('', (req, res) => {
    res.send('<h1>Página principal :P</h1>')
})

app.get ('/peixes', async (req, res) => {
    // res.send('<h1>Vc chegou na rota dos peixes</h1>')
    //Modificação usando ejs:
    // res.append ("Content-Type", "text/html; charset=utf-8") //Não é necessario com express???????
    
    const peixe = await peixes.findByPk(1) //consulta a base de dados e retorna o valor seguindo o parâmetro da chave primaria (neste caso)

    // res.render('peixes', { nome: req.query.nome})

    res.render('peixes', { nome: peixe.nome, especie: peixe.especie})
    
})


//Editada para retornar registros especificos de nossa Base de dados:
app.get ('/usuarios', async (req, res) => {
    const user = await users.findByPk(4) //consulta a base de dados e retorna o valor seguindo o parâmetro da chave primaria (neste caso)

    res.render('usuarios', { nome: user.name, descricao: user.description}) //Agora em vez do nome vir da requisição, vai vir da base de dados
})

app.post('/', (req, res) => {
    res.send('Respondendo uma requisicao POST')
})

app.post('/peixes', (req, res) => {
    res.send('Adotando um novo peixinho')
})

app.listen (3000, () => {
    console.log('Server funcionando no porto 3000'.rainbow)
})

// const server = http.createServer((req, res) =>{
//     if (req.method === 'GET') {

//         if (req.url === '/peixes') {
//             res.writeHead (200) //escritura de cabecera (mensagem para o navegador)
//             res.end ('<h1>VC chegou a rota dos peixes</h1>')
//         } else if (req.url === '/batatas'){
//             res.writeHead (200)
//             req.writeHead (200)
//             res.end ('<h1>Vc chegou a rota de batatas :P</h1>')
//         } else {
//             res.writeHead (404)
//             res.end ('<h1>Essa rota nao existe! :(</h1>')
//         }
        
//     } else if (req.method === 'POST') {
//         res.writeHead (200)
//         res.end ('<h1>Respondendo uma requisicao POST</h1>')
//     } else if (req.method === 'PUT') {
//         res.writeHead (200)
//         res.end ('<h1>Respondendo uma requisicao PUT</h1>')
//     } else if (req.method === 'DELETE') {
//         res.writeHead (200)
//         res.end ('<h1>Respondendo uma requisicao DELETE</h1>')
//     } else {
//         res.writeHead (400)
//         res.end(`Não sei tratar esse método HTTP: ${req.method}`)
//     }
// })

// server.listen (5000, function (){
//     console.log('Server funcionando no porto 5000'.rainbow)
// })