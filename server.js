import app from "./app.js"
import db from "./config/dbconect.js";



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Conectado em http://localhost:${port}`)
})