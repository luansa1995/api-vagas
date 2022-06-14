

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
        email: 'joao@gmail.com',
        tel:'73 32111794'
    })	

})


app.get('/', (req,res) => {
    res.json({
        msg: 'OK'
    })
})