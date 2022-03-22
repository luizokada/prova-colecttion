import express from "express"
import produtos from "../mocks/produtos.js"
import buscarProduto from "../utils/produtos/buscarProduto.js"

const app = express()

app.use(express.json())

app.get('/produtos',
    (req, res) => {
        res.status(200).json(produtos);

    })

app.post('/produtos',
    (req, res) => {
        produtos.push(req.body);
        res.status(201).send(`Livro Cadastrado com sucesso`);

    })

app.put('/produtos/:id',
    (req, res) => {
        let index = buscarProduto(req.params.id, produtos);
        produtos[index].nome = req.body.nome;
        res.json(produtos)
    })

app.delete('/produtos/:id',
    (req, res) => {
        let index = buscarProduto(req.params.id, produtos);
        produtos.splice(index, 1);
        res.json(produtos)
    })


export default app;