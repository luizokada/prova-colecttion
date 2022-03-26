import produtos from "../models/Produto.js";

class produtoController {
  static listarProdutos = (req, res) => {
    produtos.find((err, produtos) => {
      res.status(200).json(produtos);
    });
  };

  static listarProdutoPorNome = (req, res) => {
    const nome = req.query.nome;
    produtos.find({ nome: nome }, {}, (err, produtos) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} -  Erro ao cadastrar o novo produto`,
        });
      } else {
        res.status(200).send(produtos);
      }
    });
  };

  static cadastrarProduto = (req, res) => {
    let produto = new produtos(req.body);

    produto.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} -  Erro ao cadastrar o novo produto`,
        });
      } else {
        res.status(201).send(produto.toJSON());
      }
    });
  };

  static atualizarProduto = (req, res) => {
    const id = req.params.id;

    const dataInativacao = req.body.ativo ? "" : new Date();

    const newProduto = {
      id: id,
      nome: req.body.nome,
      marca: req.body.marca,
      thumb: req.body.thumb,
      descricao: req.body.descricao,
      ativo: req.body.ativo,
      dataInativacao,
    };

    produtos.findByIdAndUpdate(id, { $set: newProduto }, (err) => {
      if (!err) {
        res.status(200).send({ message: `Produto alterado com sucesso` });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Erro na atualização` });
      }
    });
  };

  static excluirProduto = (req, res) => {
    const id = req.params.id;

    produtos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send(`Produto deletado com sucesso`);
      } else {
        res.status(500).send(`${err.message} - Erro na exclusao`);
      }
    });
  };
}

export default produtoController;
