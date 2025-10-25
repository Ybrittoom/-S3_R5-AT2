## INTRODUÇAO AO SISTEMA DE BIBLIOTECA

### livros

#### GET /livros 
- **descriçao** Obtem uma lista de livros cadastrados
- **Respostas** Um array de livros cadastrados
- **Erros possiveis** Livro nao encontrado

#### POST /livros
- **Descriçao** Adiciona um livro ao banco de dados
- **Body**
```
{
	"titulo": "exemplo",
	"anoPublicacao": 2016,
	"qtdLivros": 3,
	"idAutor": "" //ID do autor universal
}

```

- **Response**
```
{
    message: 'Livro cadastrado com sucesso'
}
```