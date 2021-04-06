// const http = require ('http') // já não precisarei mais do módulo http
const colors = require ('colors')

//Agora vou usar o módulo express:
const express = require ('express')
const app = express ()

app.get ('', (req, res) => {
    res.send('<h1>Pagina principal :P</h1>')
})

app.get ('/peixes', (req, res) => {
    res.send('<h1>Vc chegou na rota dos peixes</h1>')
})

app.get ('/batatas', (req, res) => {
    res.send('<h1>Vc chegou na rota das batatas</h1>')
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