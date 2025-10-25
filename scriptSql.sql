CREATE DATABASE library;

USE library;

CREATE TABLE autor (
	idAutor UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	nomeAutor VARCHAR(100) NOT NULL,
	nacionalidade VARCHAR(100) NOT NULL,
	idadeAutor INT NOT NULL
)

CREATE TABLE livro (
	idLivro UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	titulo VARCHAR(100) NOT NULL,
	anoPublicacao DATE NOT NULL,
	qtdExemplares INT NOT NULL, 
	idAutor UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY (idAutor) REFERENCES autor(idAutor)
)

USE biblioteca;

INSERT INTO autores (nomeAutor, nacionalidade, tipo)
VALUES ('Alan Fiares', 'NL', 'Terror')

SELECT * FROM autores;