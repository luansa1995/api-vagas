
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
    res.json([ 
        {
            id : '.',
            nameCompany: 'Móveis Fênix -  publicada 17-08-22', 
            job:'Cargo: VENDEDORA INTERNA', 
            contact : 'contato: rhmoveisfenixitabuna@gmail.com',
            Description: 'Experiência mínima de 06 meses;Sexo Feminino; Maior de 18 anos;'
        },  
        {
            id : '.',
            nameCompany: 'Magazine Luiza -  publicada 15-08-22', 
            job:'Cargo:  ASSISTENTE DE LOJA - Praca Siqueira Campos, 72', 
            contact : 'contato: ',
            Description: 'Ensino Médio Completo (preferencialmente); Atividades: Preencher dados da venda no sistema; Auxiliar na venda; Recepcionar o cliente na loja;Conferir produtos e fazer pacotes; Etc.'
        },         
        {
            id : '.',
            nameCompany: 'MAXXI ITABUNA', 
            job:'Cargo: AGENTE DE CARTÕES E SERVIÇOS ', 
            contact : 'contato: <a href="<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a>"> Cadastre-se</a> ',
            Description: 'Ensino Médio Completo;Desejável experiência com vendas;Necessário disponibilidade para trabalhar em escala 6×1 (feriados e finais de semana);'
        },
        {
            id : '.',
            nameCompany: 'Grupo Big', 
            job:'Cargo: AÇOUGUEIRO ', 
            contact : 'contato: <a href="<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a>"> Cadastre-se</a> ',
            Description: 'Ensino médio completo;Possuir experiência na função de Açougueiro;Necessário disponibilidade para trabalhar em escala 6×1 (feriados e finais de semana);'
        },
        {
            id : '.',
            nameCompany: 'Raízen -  publicada 11-08-22', 
            job:'Cargo: AUXILIAR ADMINISTRATIVO I – PcD', 
            contact : '<a href="https://genteraizen.gupy.io/job/eyJqb2JJZCI6MjcyNDk1Niwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page"> Cadastre-se</a>',
            Description: 'Desejável conhecimento de SAP; Obrigatório Pacote office intermediário; Demais rotinas administrativas do escritório; Agendar veículos para carregamento e descarga em terminal terceiro; Atender clientes;'
        },    
         {
            id : '.',
            nameCompany: 'Barry Callebaut ', 
            job:'Cargo: OPERADOR DE EMBARQUE', 
            contact : '<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a>',
            Description: 'Pacote office intermediário; Noções de SAP e 5S serão diferenciais; Superior Completo'
        },    
         {
            id : '.',
            nameCompany: 'Barry Callebaut ', 
            job:'Cargo: ATENDENTE DE PRODUÇÃO', 
            contact : '<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a>',
            Description: 'Flexibilidade de horários;Ensino médico completo; Boa comunicação; Realizar limpezas de áreas e equipamentos do processo; Coletas de amostras no processo produtivo; Auxiliar o operador de produção nas diversas atividades operacionais;'
        },    
        {
            id : '.',
            nameCompany: 'Móveis Fênix - publicada 09-08-22', 
            job:'Cargo: CARREGADOR ', 
            contact : 'contato: rhmoveisfenixitabuna@gmail.com',
            Description: 'Residir em Itabuna; Maior de 18 anos; Experiência como carregador;'
        },        
        {
            id : '.',
            nameCompany: 'Drogarias Costa', 
            job:'Cargo: BALCONISTA ', 
            contact : 'contato:  pessoal@drogariascosta.com.br ',
            Description: 'Boa comunicação; Disponibilidade; Experiência de pelo menos um ano em balcão de farmácia'
        },
        {
            id : '.',
            nameCompany: 'Drogarias Costa', 
            job:'Cargo: PERFUMARIA', 
            contact : 'contato:  pessoal@drogariascosta.com.br ',
            Description: 'Boa comunicação; Disponibilidade; Experiência de pelo menos um ano em perfumaria'
        },  
        {
            id : '.',
            nameCompany: ' MAXXI ITABUNA', 
            job:'Cargo: APRENDIZ ', 
            contact : 'contato: <a href="https://jobs.kenoby.com/grupobig/job/aprendizmaxxi-itabuna/62ecc0060633291e32c2e4f6?utm_source=website"  > Cadastre-se</a>',
            Description: 'Auxiliar a fazer devoluções de produtos; Auxiliar a fazer devoluções de produtos; Desejável conhecimento do Pacote Office; Ensino Fundamental Cursando a partir do 7ª ano;'
        },
        {
        id : '.',
        nameCompany: 'Grupo Big ', 
        job:'Cargo: REPOSITOR ', 
        contact : 'contato:  <a href="https://portal.kenoby.com/casadoconstrutorlojas/login?redirect=%2Fcasadoconstrutorlojas%2Fcadastrar%2F62dad6539326d679b20d690a&1=1utm_source%3Dwebsite&action=email"  > Cadastre-se</a> ',
        Description: 'Ensino Médio completo; Desejável experiência como Repositor; Necessário disponibilidade para trabalhar em escala 6×1 (feriados e finais de semana);'
    },  
        {
        id : '.',
        nameCompany: 'Grupo Indiana -  publicada 05-08-22', 
        job:'Cargo: ASSISTENTE ADMINISTRATIVO APRENDIZ', 
        contact : 'contato: ',
        Description: 'Salário fixo no valor de R$ 606,00; Comprometimento com a empresa; Carteira de Reservista(CASO 18+); Idade entre 14 e 21 anos; '
    },
        {
           id : '.',
           nameCompany: 'Grupo Indiana', 
           job:'Cargo: AUXILIAR DE CONSULTOR TÉCNICO', 
           contact : '<a href="https://grupoindiana.gupy.io/job/eyJqb2JJZCI6MjczODMwOCwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page"  > Cadastre-se</a>',
           Description: 'Ensino médio completo; CNH B; Experiência anterior com atendimento ao público.'
       },
        {
            id : '.',
            nameCompany: 'Tarik Fontes Plaza Hotel - publicada 03-08-22', 
            job:'Cargo: ESTÁGIO ADMINISTRAÇÃO', 
            contact : 'contato: currículo por Whatsapp:  (73) 3214-8800 ',
            Description: 'Atividades pertinentes ao cargo'
        },{
        id : '.',
        nameCompany: 'Tarik Fontes Plaza Hotel ', 
        job:'Cargo: RECEPÇÃO ', 
        contact : 'contato: currículo por Whatsapp:  (73) 3214-8800 ',
        Description: 'RECEPÇÃO '
    },  {
        id : '.',
        nameCompany: 'PLD Soluções', 
        job:'Cargo: VENDEDORA', 
        contact : 'contato: pld.suporteadm@gmail.com  (obs.: mandar email com Assunto: "Cod. DET015 - Vendedora")',
        Description: 'Vendas de perfumes, bolsas, acessórios, serviço de caixa, embalagens do produto, conservação da loja e atividades correlacionadas.'
    },{
        id : '.',
        nameCompany: 'Fortbras ', 
        job:'Cargo: VENDEDOR(A) INTERNO(A) BALCÃO', 
        contact : 'contato: <a href="https://fortbras.gupy.io/job/eyJqb2JJZCI6MjY3ODY5MSwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page">Cadastre-se</a>',
        Description: 'Ensino médio completo; Sólida experiência com venda de autopeças de forma ativa por telefone; Disciplina no cumprimento de processos;'
    },{
        id : '.',
        nameCompany: 'Pague Menos - GOES CALMON', 
        job:'Cargo: ATENDENTE DE FARMÁCIA', 
        contact : 'contato: <a href="https://portal.kenoby.com/paguemenoslojas/login?redirect=%2Fpaguemenoslojas%2Fcadastrar%2F62e1a12f539358469cf270de&1=1utm_source%3Dwebsite&action=email">Cadastre-se </a> ',
        Description: 'Ensino médio completo; Conhecimento em Informática Básica; Desejável experiência com vendas de medicamentos; Desejável curso de auxiliar de farmácia.'
    },{
        id : '.',
        nameCompany: 'Coelba ', 
        job:'Cargo: APRENDIZ ADMINISTRATIVO (PCD)', 
        contact : 'contact: -',
        Description: 'Precisa: Ensino médio cursando ou completo;Office básico (Excel, Word, Windows, Internet) e Power Point; entre outros'
    },{
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