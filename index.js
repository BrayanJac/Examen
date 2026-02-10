const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Integracio continua');
});

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});