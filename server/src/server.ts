import express  from 'express';

const app = express();

app.get('/user', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Diego',
        'Robson',
        'Cleiton',
        'Daniel'
    ]);
});

app.listen(3333);