const http = require ('http') //import do módulo http

const server = http.createServer((req, res) =>{
    if (req.method === 'GET') {

        if (req.url === '/peixes') {
            res.writeHead (200) //escritura de cabecera (mensagem para o navegador)
            res.end ('<h1>VC chegou a rota dos peixes</h1>')
        } else if (req.url === '/batatas'){
            res.writeHead (200)
            res.end ('<h1>Vc chegou a rota de batatas :P</h1>')
        } else {
            res.writeHead (404)
            res.end ('<h1>Essa rota nao existe! :(</h1>')
        }
        
    } else if (req.method === 'POST') {
        res.writeHead (200)
        res.end ('<h1>Respondendo uma requisicao POST</h1>')
    } else if (req.method === 'PUT') {
        res.writeHead (200)
        res.end ('<h1>Respondendo uma requisicao PUT</h1>')
    } else if (req.method === 'DELETE') {
        res.writeHead (200)
        res.end ('<h1>Respondendo uma requisicao DELETE</h1>')
    } else {
        res.writeHead (400)
        res.end(`Não sei tratar esse método HTTP: ${req.method}`)
    }
})

server.listen (5000)