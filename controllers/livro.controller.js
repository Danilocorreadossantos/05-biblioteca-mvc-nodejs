const livroModel = require("../models/livro.model")


function listarLivros(request, response){

    // Chamar a funçao de listar livros do model de livros
    const livros = livroModel.listarLivros()
       
    // response.json(livros)

    //Renderizar a view 'listar-livros' para o usuario
    response.render('listar-livros')
}

module.exports = {
    listarLivros
}