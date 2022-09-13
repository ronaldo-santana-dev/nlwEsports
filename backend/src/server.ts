

const express = require('express')

const app = express();

app.get('/ads', (request: any, response: any) => {
    return response.json([{id: 1, name: 'ADC Desde o CS'}, {id: 2, name: 'Sorakando'}, {id: 3, name: 'Gragolandia'}]);
})

app.listen(3333);