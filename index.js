const express = require('express');
const http = require('http');

const routesProprietarios = require('./src/api/routes/proprietarioproRoutes');

require('./src/database/indexdb')

const app = express ();

app.set('url', 'http://localhost:');
app.set('porta', 3000);

app.use(express.json());

app.use(routesProprietarios);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
})  