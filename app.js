const express = require('express')
const app = express()
const {livroRoutes} = require("./src/routes/livroRouter")

const PORT = 8081;

app.use(express.json())

app.use('/', livroRoutes)

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`)
})