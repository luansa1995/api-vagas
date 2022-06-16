
// https://api-vagas-itabuna.herokuapp.com/vagas

// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

const express = require('express');
const app = express();   

const PORT = process.env.PORT || 8877  

app.listen(PORT, () =>{
    console.log('Escutando na porta: '+ PORT);
})

// ate 7° passo
app.get('/about', (req, res) => {
    res.json({
        id : '1',
        name: 'Joao Pedro',
        email: 'joao@gmail.com',
        urls: [
            {
            type:'github',
            url: 'http://github.com/joao'
        
            },
            {
            type: 'youtube',
            url: 'https:youtube.com/joao'
            }
        ]
    })	

})

app.get('/vagas', (req, res) => {
    res.json({
        id : '1',
        nameCompany: 'Vivo',
        address: 'never land',
        email: 'joao@gmail.com',
        tel:'73 32111794',
        Description: 'Não consta'
    },{
    id : '2',
        nameCompany: 'Oi',
        address: 'r. A',
        email: 'testeo@gmail.com',
        tel:'73 99999 9999',
        Description: 'Não perto de seu joao'
    })	

})


app.get('/', (req,res) => {
    res.json({
        msg: 'OK'
    })
})