const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.json({
        error: false,
        message: "Informações da página HOME!"
    })
});

app.listen(8080, () => {
    console.log("Servidor Iniciado na porta 8080.")
});
