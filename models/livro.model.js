//CRUD

// C CREATE - POST - INSERT INTO
// R READ   - GET - SELECT
// U UPDATE - PUT - UPDATE
// D DELETE - DELET - DELET FROM

// TABELA: LIVROS
// COLUNAS : UD,NOME , AUTOR, ANO, GENERO, CAPA_URL

function listarLivros() {
    const livros = [
        { 
            id: 1,
            nome: "Btc red pill" , 
            autor: "renato trezoitao", 
            ano: "2020", 
            genero: "economia", 
            capa_url:"http://localhost:3000/imagem-01"
        },
        { 
            id: 2,
            nome: "Vida bandida" , 
            autor: "zezé di camargo", 
            ano: "1999", 
            genero: "só sucessos", 
            capa_url:"http://localhost:3000/imagem-02"
        },
    ] //MOCK - simulaão de dados

    return livros;
}

module.exports = {
    listarLivros
}