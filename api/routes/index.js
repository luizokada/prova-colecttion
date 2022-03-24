import express from "express";
import produtos from "./produtoRoute.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200)
    })
    app.use(
        express.json(),
        produtos
    )
}

export default routes