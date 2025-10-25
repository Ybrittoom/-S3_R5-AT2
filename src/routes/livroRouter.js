const express = require('express')
const router = express.Router()
const {livroController} = require('../controllers/livroController')

//GET /livros -> listar os livros
router.get('/livros', livroController.listarLivro)

//GET /livros -> adicionar novo livro 
router.post('/livros', livroController.adicionarLivro)

module.exports = {
    livroRoutes: router
}