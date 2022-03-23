
export default function buscarProduto(id, produtos) {
    return produtos.findIndex(produto => produto.id == id)

}