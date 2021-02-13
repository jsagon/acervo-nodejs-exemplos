// Requisita o módulo Express instalado
const express = require('express')

// Cria uma instância da aplicação/express
const app = express()

// Registra uma rota get(sinalizando leitura) apontando para a raiz '/'. Ou seja, exemplo.com/
// req: Request - Em resumo, corresponde as entradas, tudo aquilo que é enviado para o servidor 
// res: Response - Corresponde as saídas, tudo aquilo que é deseja enviar para a exterior
app.get('/', (req, res) => {
    res.send('Olá mundo. <a href="/sobre">Sobre</a>')
})

app.get('/sobre', (req, res) => {
    res.send("<h1>Um simples tutorial de NodeJS.</h1>")
})

// Inicializa o servidor observando a porta 3000
app.listen(3000, () => {
  console.log('Server online')
})