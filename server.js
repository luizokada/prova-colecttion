import app from "./routes/produtoRoute.js"

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Conectado em http://localhost:${port}`)
})