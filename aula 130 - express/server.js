const express = require('express'); //requeriu o express que está em node modules
const app = express();

// CRUD = CREATE, READ, UPDATE, DELETE.
//          POST   GET   PUT    DELETE
// http://meusite.com/ <- GET para que o navagador entregue a página /
// http://meusite.com/sobre <- GET para que o navagador entregue a página /sobre
// http://meusite.com/contato <- GET para que o navagador entregue a página /contato

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});