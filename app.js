const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = process.env.PORT || 8050
const path = require('path')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const admini = require('./routes/admin')

//Congfiguração da engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Configuração do Body-Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Acesso ao diretório
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', admini)

//Rota Principal
app.get('/', (req, res) => {
    res.render('index')
})

server.listen(PORT, () => {
    console.log('Servidor iniciado...')
})
