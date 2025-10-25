const {livroModel} = require('../models/livroModels')

const livroController = {

    //funçao para listar todos os livro
    //GET /livros
    listarLivro: async (req, res) => {
        try {

            const { titulo } = req.query

            if (titulo) {
                const livro = await livroModel.buscarLivroPorTitulo(titulo)

                if (livro.length === 0) {
                    return res.status(404).json({
                        message: 'Livro nao encotrado'
                    })
                }
                
                return res.status(200).json(livro)
            }

            const livros = await livroModel.buscarLivro()

            res.status(200).json(livros)
        } catch (error) {
            console.error('Erro ao listar livro: ', error)
            res.status(500).json({
                error: "Erro ao buscar livros"
            })
        }
    },

    /*
        -----------------------------
        CRIAR UM NOVO LIVRO
        POST /cliente

        {
            ""
        }
    */

    adicionarLivro: async (req , res) => {
        try {
            const { titulo, anoPublicacao, qtdLivros, idAutor} = req.body

            await livroModel.adicionarLivro(titulo, anoPublicacao, qtdLivros, idAutor)

            res.status(201).json({
                message: 'livro cadastrado com sucesso'
            })
        } catch (error) {
            console.error('erro ao cadastrar: ', error)
            res.status(500).json({
                error: 'Erro ao cadastrar livro'
            })
        }
    }

}

module.exports = {
    livroController
}