import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        marca: { type: String, required: true },
        thumb: { type: String, required: true },
        dataInativacao: { type: Date },
        ativo: { type: Boolean, required: true },
    }
)

const produtos = mongoose.model('produtos', produtoSchema);

produtos.createIndexes({ nome: "text" })

export default produtos;