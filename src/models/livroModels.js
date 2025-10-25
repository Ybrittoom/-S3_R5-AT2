const {sql, getConnetion} = require('../config/DB')

const livroModel = {
    adicionarLivro: async (titulo, anoPublicacao, qtdLivros, idAutor) => {
        try {
            const pool = await getConnetion()

            let querySQL = `
                INSERT INTO livros (titulo, anoPublicacao, qtdLivros, idAutor)
                VALUES (@titulo, @anoPublicacao, @qtdLivros, @idAutor)
            `

            await pool.request()
                .input('titulo', sql.VarChar(50), titulo)
                .input('anoPublicacao', sql.Int, anoPublicacao)
                .input('qtdLivros', sql.Int, qtdLivros)
                .input('idAutor', sql.UniqueIdentifier, idAutor)
                .query(querySQL);

        } catch (error){
            console.error('Erro ao inserir livro: ', error)
            throw error
        }
    },

    buscarLivro: async () => {
        try {
            const pool = await getConnetion()

            let querySQL = 'SELECT * FROM livros'

            const result = await pool.request().query(querySQL)

            return result.recordset;
        } catch (error) {
            console.error('Erro ao buscar clientes: ', error)
            throw error
        }
    },

    buscarLivroPorTitulo: async (titulo) => {
        try {
            const pool = await getConnetion()
            const querySQL = 'SELECT * FROM livros WHERE titulo = @titulo'
            const result = await pool.request()
                .input('titulo', sql.VarChar(50), titulo)
                .query(querySQL)

            return result.recordset
        } catch (error) {
            console.error('Erro ao buscar livro por título: ', error)
            throw error
        }
    }
}

module.exports = {
    livroModel
}