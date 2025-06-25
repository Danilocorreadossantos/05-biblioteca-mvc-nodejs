//importar o módulo express
const express = require('express');

//importar controller
const livroController = require ('./controllers/livro.controller');

// cria uma instancia do express
const app = express();

// Configura EJS como um motor de visulizaçao
app.set('view engine', 'ejs')
app.set('views', './views')

//Rota para listar todos os livros
app.get('/livros',livroController.listarLivros )

//configura a porta do servidor
app.listen(3000, function () {
    console.log("Servidor rodando com sucesso")
})