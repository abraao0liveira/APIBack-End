// Server
const express = require('express') // chamando o modulo do express e guardando na constante.
const axios = require('axios') // chamando o modulo do axios e guardando na constante.

const app = express() // inicializando a constante.

app.listen('3000') // o listen ouve o navegador e joga pra ele o que queremos.

/* */

// GET
app.route('/').get((req, res) => {
    res.send("Hello World")
} ) // Escolha de rota para uma resposta(res) receber/enviar(send) algum dado, no caso o "Hello world".
app.route('/abraao0liveira').get((req, res) => {
    res.send("Perfil: abraao0liveira")
})


// middleware
app.use(express.json()) // Transformando em json.

// POST
app.route('/').post((req, res) => res.send(req.body)) // recebendo um dado e mostrando no Insomnia.

// PUT
let author = "Abraão Oliveira"
app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
}) // Editar uma informação.

// DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})

// BODY
app.use(express.json())

app.route('/').post( (req, res) => {
    const {name, bookStore} = req.body
    res.send(`Olá, eu me chamo ${name} e esses são alguns dos meus livros: ${bookStore}.`)
})

// ROUTE 
app.route('/').get((req, res) => res.send('oi')) // rota 1

app.route('/:variavel').get((req, res) => res.send(req.params.variavel)) // rota 2

app.route('/identidade/:name').get((req, res) => res.send(req.params.name)) // rota 3

// QUERY
app.route('/').get((req, res) => res.send(req.query))

app.route('/about/music').get((req, res) => res.send(req.query.music))

// Trabalhando com o axios para usar dados de outra api
app.route('/').get((req, res) => {
    axios.get("https://api.github.com/users/abraao0liveira")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>"`)) // Dando certo, o resultado vai ser mostrado.
    .catch(error => console.error(error)) // Caso apareça algum erro.
})
