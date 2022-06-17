
// https://api-vagas-itabuna.herokuapp.com/vagas

// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

const { response } = require('express');
const express = require('express');
const app = express();  
// const cors = require('cors'); 
                            // nao funcionou
                // response.setHeader(
                //     "Access-Control-Allow-Origin: *"
                // );

const PORT = process.env.PORT || 8877  

app.listen(PORT, () =>{
    console.log('Escutando na porta: '+ PORT);
})

app.get('/vagas', (req, res) => {
    res.json([{
        id : '1',
        nameCompany: 'Vivo',  
        address: 'never land',
        email: 'joao@gmail.com',
        tel:'73 32111794',
        Description: 'Não consta',
    },{
        id : '2',
            nameCompany: 'Oi',
            address: 'r. A',
            email: 'testeo@gmail.com',
            tel:'73 99999 9999',
            Description: 'Não perto de seu joao'
    },{
    id : '3',
    nameCompany: 'claro',
    address: 'r. B',
    email: 'testeB@gmail.com',
    tel:'73 55555 5555',
    Description: 'garagem coletiva',
    }]
    )

})

// app.get('/', function (req, res) {
//     res.send("Olá Luan, Seja Bem Vindo!");
// });

app.get('/', (req,res) => {
    res.json({
        msg: 'OK'
    })
})



//OPÇÃO DE APARECE UM TEXTO SIMPLES  






// function GetMessages(c *gin.Context) {
// 	version = c.Param("version")
// 	fmt.Println("Version", version)
// 	if version == "v2" {
// 		c.Header("Access-Control-Allow-Origin", "http://localhost:8080")
// 	}
// 	c.JSON(http.StatusOK, gin.H{"messages": messages})
// }



// app.get('/about', (req, res) => {
//     res.json({
//         id : '1',
//         name: 'Joao Pedro',
//         email: 'joao@gmail.com',
//         urls: [
//             {
//             type:'github',
//             url: 'http://github.com/joao'
        
//             },
//             {
//             type: 'youtube',
//             url: 'https:youtube.com/joao'
//             }
//         ]
//     })	

// })