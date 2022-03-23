import express from "express"
import produtos from "../models/Produto.js"
import buscarProduto from "../utils/produtos/buscarProduto.js"
import produtoController from "../controllers/produtoController.js"

const router = express.Router();

router
    .get('/produtos', produtoController.listarProdutos)
    .get('/produtos/busca', produtoController.listarProdutoPorNome)
    .post('/produtos', produtoController.cadastrarProduto)
    .put('/produtos/:id', produtoController.atualizarProduto)
    .delete('/produtos/:id', produtoController.excluirProduto)

export default router;