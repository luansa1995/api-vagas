
// https://api-vagas-itabuna.herokuapp.com/vagas

// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");


const express = require('express');
const app = express();  
const cors = require('cors');      //+ CORS
           
const PORT = process.env.PORT || 8877  

app.listen(PORT, () =>{
    console.log('Escutando na porta: '+ PORT);
})

app.use(express.json());


                //+ CORS
app.use((req, res, next) => {
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST');
    app.use(cors());
    next();
}); 

app.get('/vagas', (req, res) => {
    res.json([{
        id : '.',
        nameCompany: 'SGS MONTAGEM INDUSTRIAL ELETROMECANICAS LTDA', 
        job:'Cargo: ENCANADOR INDUSTRIAL', 
        contact : ' adm@sgsmontagemindustrial.com.br',
        Description: 'publicada: 11/07',
    },{
        id : '.',
        nameCompany: 'Innove med centro médico e odontológico', 
        job:'Cargo: Recepcionista', 
        contact : 'innovemedcentro@hotmail.com',
        Description: 'Local: UBATÃ',
    },{
        id : '.',
        nameCompany: 'Innove med centro médico e odontológico', 
        job:'Cargo: Aux./Técnico em saúde bucal ', 
        contact : 'innovemedcentro@hotmail.com',
        Description: 'Local: UBATÃ',
    },{
        id : '.',
        nameCompany: 'Innove med centro médico e odontológico', 
        job:'Cargo: Tec. em enfermagem', 
        contact : 'innovemedcentro@hotmail.com',
        Description: 'Local: UBATÃ',
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado', 
        job:'Cargo: Motorista de entrega e manobrista', 
        contact : 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>',
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado',
        job:'Cargo: Auxiliar de armazém', 
        contact: 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado', 
        job:'Cargo: Aprendiz', 
        contact : 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado', 
        job:'Cargo: Auxiliar de entrega', 
        contact : 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado', 
        job:'Cargo: Vendedor ilhéus/itabuna', 
        contact : 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Heineken Revendedor autorizado', 
        job:'Cargo: Operador de empilhadeira', 
        contact : 'rhcurriculos@ios.grupojsg.com.br',
        Description: 'Mais informaçõs sobre a vaga: <a href="https://ibb.co/pRJs4F2">mais info</a>'
    }

    // ,{
    // id : '3',
    // nameCompany: 'claro',
    // address: 'r. B',
    // email: 'testeB@gmail.com',
    // tel:'73 55555 5555',
    // Description: 'garagem coletiva',
    // },{
    //     id : '4',
    //     nameCompany: 'teste4',  
    //     address: 'never land',
    //     email: 'joao@gmail.com',
    //     tel:'73 32111794',
    //     Description: 'Não consta',
    // },{
    //     id : '5',
    //     nameCompany: 'teste5',  
    //     address: 'never land',
    //     email: 'joao@gmail.com',
    //     tel:'73 32111794',
    //     Description: 'Não consta',
    // },{
    //     id : '6',
    //     nameCompany: 'teste6',  
    //     address: 'never land',
    //     email: 'joao@gmail.com',
    //     tel:'73 32111794',
    //     Description: 'Não consta',
    // }
])

})

app.get('/', function (req, res) {
    res.send("Olá Luan, Seja Bem Vindo!");
});

// app.get('/', (req,res) => {
//     res.json({
//         msg: 'OK'
//     })
// })



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