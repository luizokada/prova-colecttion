import produtos from "../models/Produto.js";

class produtoController {

    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos);
        });
    }

    static listarProdutoPorNome = (req, res) => {
        const nome = req.query.nome;
        produtos.find({ 'nome': nome }, {}, (err, produtos) => {
            res.status(200).send(produtos)
        })
    }

    static cadastrarProduto = (req, res) => {
        let produto = new produtos(req.body);

        produto.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} -  Erro ao cadastrar o novo produto` });
            }
            else {
                res.status(201).send(produto.toJSON());
            }
        })

    }
    static atualizarProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Produto alterado com sucesso` })
            }
            else {
                res.status(500).send({ message: `${err.message} - Erro na atualização` })
            }

        })

    }

    static excluirProduto = (req, res) => {
        const id = req.params.id;

        produtos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).message(`Livro deletado com sucesso`)
            }
            else {
                res.status(500).message(`${err.message} - Erro na exclusao`)
            }
        })
    }

}

export default produtoController;