
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
        nameCompany: 'Casa do Construtor', 
        job:'Cargo: Mecânico ', 
        contact : '<a href="https://portal.kenoby.com/casadoconstrutorlojas/login?redirect=%2Fcasadoconstrutorlojas%2Fcadastrar%2F62dad6539326d679b20d690a&1=1utm_source%3Dwebsite&action=email"  > Cadastre-se</a>',
        Description: 'Ensino médio Completo; Curso técnico mecânico; Carteira de habilitação AB.'
    },{
        id : '.',
        nameCompany: 'Grupo Indiana', 
        job:'Cargo: OPERADOR DE AGENDAMENTO', 
        contact : ' <a href="https://grupoindiana.gupy.io/job/eyJqb2JJZCI6MjY2MDE4NSwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page"  > Cadastre-se</a>',
        Description: 'Ensino médio completo, experiência anterior na área de telemarketing será um diferencial'
    },{
        id : '.',
        nameCompany: ' UNIÃO Itabuna', 
        job:'Cargo: Vendedor(a) Interno(a) ', 
        contact : ' <a href="https://fortbras.com.br/trabalhe-conosco/"  > Cadastre-se</a>',
        Description: '<a href="https://fortbras.com.br/trabalhe-conosco/"> Mais informações</a>'
    },
{
        id : '.',
        nameCompany: 'Riachuelo ', 
        job:'Cargo: Assistente de Atendimento', 
        contact : '-',
        Description: 'Responsável por realizar o atendimento ao cliente e venda dos produtos financeiros; Oferecer o cartão Riachuelo e os produtos financeiros para todos os clientes; Atender o cliente em todos os pontos de contato; Executar os processos operacionais do crediário;'
    },{
        id : '.',
        nameCompany: 'Cinemark Brasil ', 
        job:'Cargo: Gerente de Operações', 
        contact : '-',
        Description: 'Desejável conhecimentos em normas de vigilância sanitária e controle de metas, indicadores e resultados em vendas; Formao superior completa;  (Pacote Office); Experiência com gerenciamento de grandes equipes em operaes de varejo;.'
    },{
        id : '.',
        nameCompany: 'Pet Delle' , 
        job:'Cargo: Vendedor de Loja', 
        contact : ' (73) 998265007',
        Description: ' Em Itabuna/BA. Vendedor em pet shop, com boa capacidade de comunicação e perfil para trabalhar em equipe '
    },{
        id : '.',
        nameCompany: 'Vivo - Alea Vivo', 
        job:'Cargo: Vendedor(a) Interno(a)', 
        contact : '<a href="https://aleavivo.gupy.io/job/eyJqb2JJZCI6MjA0OTk2MSwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page">Cadastre-se</a>',
        Description: 'Local: Itabuna-ba | Salário Fixo + Comissão+ Benefícios | Ensino Médio Completo | Experiência em vendas'
    },{
        id : '.',
        nameCompany: 'SINEBAHIA | Atualizado dia 16-07-22', 
        job:'Cargo: Muitas vagas', 
        contact : 'Cadastre-se físicamente no Sinebahia',
        Description: '<a href="https://itabunavagas.github.io/itabunavagas112/sinebahia.html">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Móveis Fênix', 
        job:'Cargo: OPERADORA DE CAIXA', 
        contact : 'Cadastre-se: rhmoveisfenixitabuna@gmail.com',
        Description: 'Local: Itabuna-Ba RESIDIR EM ITABUNA; ENS MÉDIO COMPLETO; CONHECIMENTO EM INFORMÁTICA.'
    },{
        id : '.',
        nameCompany: 'Sipolatti', 
        job:'Cargo: AJUDANTE DE CARGA E DESCARGA', 
        contact : '<a href="https://sipolatti.gupy.io/job/eyJqb2JJZCI6MjQ3NTYzOCwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?utm_source=EMPREGAILHEUS.COM&utm_medium=EMPREGAILHEUS.COM&utm_campaign=EMPREGAILHEUS.COM">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba | publicada 02/07 '
    },{
        id : '.',
        nameCompany: 'Grupobig', 
        job:'Cargo: Operador de Loja - Textil', 
        contact : '<a href="https://portal.kenoby.com/grupobig/login?redirect=%2Fgrupobig%2Fcadastrar%2F62cc392460fb0d1a3942b3d5&1=1utm_source%3Dwebsite&action=email">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba BAIRRO: JARDIM VITÓRIA / Requisitos:Ensino Médio Completo, Desejável experiências com atendimento ao cliente, escala 6x1 (feriados e finais de semana), <a href="https://jobs.kenoby.com/grupobig/job/operador-de-loja-textil/62cc392460fb0d1a3942b3d5?utm_source=website">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Grupobig', 
        job:'Cargo: Operador de Loja - Frente de Caixa', 
        contact : '<a href="https://portal.kenoby.com/grupobig/login?redirect=%2Fgrupobig%2Fcadastrar%2F62cc36f62663e17abb3f7263&1=1utm_source%3Dwebsite&action=email">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba BAIRRO: JARDIM VITÓRIA / Requisitos:Ensino Médio Completo, Desejável experiências com atendimento ao cliente, escala 6x1 (feriados e finais de semana), <a href="https://jobs.kenoby.com/grupobig/job/padeiro/62cc07fa9961aadf84fe4a1d?utm_source=website">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Grupobig', 
        job:'Cargo: Auxiliar de Perecíveis/repositor', 
        contact : '<a href="https://portal.kenoby.com/grupobig/login?redirect=%2Fgrupobig%2Fcadastrar%2F62952cf40a3a81392248b289&1=1utm_source%3Dwebsite&action=email">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba BAIRRO: JARDIM VITÓRIA / Requisitos:Ensino Fundamental Completo, experiência, escala 6x1 (feriados e finais de semana), <a href="https://jobs.kenoby.com/grupobig/job/auxiliar-de-pereciveis/62cc02ca78c6036ae9061809?utm_source=website">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Grupobig/MAXXI', 
        job:'Repositor PCD', 
        contact : '<a href="https://portal.kenoby.com/grupobig/login?redirect=%2Fgrupobig%2Fcadastrar%2F62cc02ca78c6036ae9061809&1=1utm_source%3Dwebsite&action=email">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba / Requisitos: Ensino Fundamental completo, Desejável experiência como Repositor, Necessário disponibilidade para trabalhar em escala 6x1 (feriados e finais de semana), <a href="https://jobs.kenoby.com/grupobig/job/repositor-pcd-maxxi-itabuna/62952cf40a3a81392248b289?utm_source=website">mais info</a>'
    },{
        id : '.',
        nameCompany: 'Grupobig', 
        job:'Cargo: Padeiro', 
        contact : '<a href="https://portal.kenoby.com/grupobig/login?redirect=%2Fgrupobig%2Fcadastrar%2F62cc07fa9961aadf84fe4a1d&1=1utm_source%3Dwebsite&action=email">Cadastre-se</a>',
        Description: 'Local: Itabuna-Ba BAIRRO: JARDIM VITÓRIA / Requisitos:Ensino Fundamental Completo, experiência, escala 6x1 (feriados e finais de semana), <a href="https://jobs.kenoby.com/grupobig/job/padeiro/62cc07fa9961aadf84fe4a1d?utm_source=website">mais info</a>'
    },{
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