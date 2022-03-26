import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  thumb: { type: String, required: true },
  dataInativacao: { type: Date },
  ativo: { type: Boolean, required: true },
  descricao: { type: String, required: true },
});

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;
