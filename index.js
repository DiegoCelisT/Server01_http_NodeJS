const http = require ('http') //import do módulo http

const server = http.createServer((req, res) =>{
    if (req.method === 'GET') {
        res.writeHead (200) //escritura de cabecera, mensagem para o navegador
        res.end ('<h1>Respondendo uma requisicao GET</h1>')
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