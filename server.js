// Requisita o módulo Express instalado
const express = require('express')
const exphbs  = require('express-handlebars');

// Cria uma instância da aplicação/express
const app = express()
app.use('/public', express.static(__dirname + '/public'))

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

// Registra uma rota get(sinalizando leitura) apontando para a raiz '/'. Ou seja, exemplo.com/
// req: Request - Em resumo, corresponde as entradas, tudo aquilo que é enviado para o servidor 
// res: Response - Corresponde as saídas, tudo aquilo que é deseja enviar para a exterior
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

// Inicializa o servidor observando a porta 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server online')
})