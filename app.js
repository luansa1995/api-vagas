
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
            nameCompany: 'Vivara - publicada 16-09-22', 
            job:'Cargo: ESTOQUISTA ', 
            contact : '<a href="https://carreiras.vivara.com.br/vagas"  > Cadastre-se</a>' ,
            Description: 'Conferência e recebimento de Notas Fiscais; Relatórios internos; Estocagem organizada de produtos; Disponibilidade e flexibilidade em seus horários para atuar aos finais de semana e feriados na Escala 6X1; '
        },{
            id : '.',
            nameCompany: 'Drogasil ', 
            job:'Cargo: ATENDENTE DE LOJA ', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2433400/atendente-de-loja"  > Cadastre-se</a>' ,
            Description: 'Ter o Ensino Médio completo; Escala de trabalho: 6 x 1 (podendo trabalhar sábados, domingos e feriados)'
        },{
            id : '.',
            nameCompany: 'Magazine Luiza ', 
            job:'Cargo:  ASSISTENTE DE LOJA', 
            contact : '<a href="https://carreiras.magazineluiza.com.br/vagas"  > Cadastre-se</a>' ,
            Description: 'Organizar e limpar o setor de trabalho;Conferir produtos e fazer pacotes; Recepcionar o cliente na loja; Auxiliar na venda; Ensino Médio Completo (preferencialmente)'
        },{
            id : '.',
            nameCompany: 'Chiller Refrigeração', 
            job:'Cargo: AUXILIAR ADMINISTRATIVO', 
            contact : '<a href="#"  > Cadastre-se: rh@chiller.com.br</a>' ,
            Description: 'Conhecimento na Area Comercial; Experiência com Informática, Word e Excel Avançado'
        },{
            id : '.',
            nameCompany: 'Moveis Fenix - publicada 14-09-22', 
            job:'Cargo: CARREGADOR ', 
            contact : '<a href="#"  > Cadastre-se:  rhmoveisfenixitabuna@gmail.com </a>' ,
            Description: 'Residir em Itabuna; Sexo Masculino; Experiência com Carga e Descarga;'
        },{
            id : '.',
            nameCompany: 'Drogasil ', 
            job:'Cargo: ATENDENTE DE LOJA ', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2433400/atendente-de-loja"  > Cadastre-se</a>' ,
            Description: ' Ter o Ensino Médio completo; Endereço: Rua Dalila Paganelli 1451; Escala de trabalho: 6 x 1 (podendo trabalhar sábados, domingos e feriados); '
        },{
            id : '.',
            nameCompany: 'Rede Alea ', 
            job:'Cargo: VENDEDOR INTERNO', 
            contact : '<a href="https://redealea.pandape.com.br/Detail/219341"  > Cadastre-se</a>' ,
            Description: 'Atua diretamente com o consumidor final, representando a marca através das soluções apresentadas, superando os objetivos qualitativos e quantitativos; Planejamento de metas; Técnicas de argumentação em vendas; Experiência em vendas;'
        },{
            id : '.',
            nameCompany: 'Grupo Brasileiro - Divisão Honda ', 
            job:'Cargo: GERENTE DE SERVIÇOS', 
            contact : '<a href="https://grupobrasileirohonda.solides.jobs/vacancies/178194#vacancyDescription"  > Cadastre-se</a>' ,
            Description: 'Experiência em gestão de equipes; Habilidade com indicadores comerciais e foco em resultados e metas; Boa comunicação verbal e escrita; Possuir CNH, categoria mínimo A; Vale-transporte; Carga horária de 44 horas semanais (segunda a sábado);'
        },{
            id : '.',
            nameCompany: 'Aramis ', 
            job:'Cargo: GERENTE DE LOJA', 
            contact : '<a href="https://aramis.gupy.io/job/eyJqb2JJZCI6Mjk0MDE0Miwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page"  > Cadastre-se</a>' ,
            Description: 'Realizar recrutamento e seleção (vendedores, operadores de caixa, estoquistas e alfaiates);    Treinar e capacitar a equipe, com o objetivo de desenvolver cada colaborador com os conhecimentos específicos da função e empresa; Raciocínio logico e capacidade analítica (Indicadores); Experiência em gestão de equipes; Conhecimento e vivência na área comercial; Conhecimento de Moda; Conhecimento de Visual Merchandising; ter trabalhado em marcas de moda masculina será um diferencial'
        },
        {
            id : '.',
            nameCompany: 'Lolla - publicada 08-09-22', 
            job:'Cargo: MANICURE', 
            contact : '<a href="#"  > Cadastre-se (71) 98804-1880</a>' ,
            Description: 'Você é Manicure profissional? Junte-se ao nosso time!'
        },{
            id : '.',
            nameCompany: 'Centauro ', 
            job:'Cargo: VENDEDOR(A) DE CALÇADOS  ', 
            contact : '<a href="https://portal.kenoby.com/centauro/login?redirect=%2Fcentauro%2Fdashboard&action=email"  > Cadastre-se</a>' ,
            Description: 'Ensino médio completo; Experiência com vendas e/ou atendimento; Conhecimento em calçados será considerado um diferencial;'
        },{
            id : '.',
            nameCompany: 'Centauro ', 
            job:'Cargo: ASSISTENTE DE LOJA  ', 
            contact : '<a href="https://portal.kenoby.com/centauro/login?redirect=%2Fcentauro%2Fdashboard&action=email"  > Cadastre-se</a>' ,
            Description: 'Vontade de aprender e sede de crescimento; Boa comunicação; Ensino médio completo;'
        },{
            id : '.',
            nameCompany: 'Moveis Fenix', 
            job:'Cargo: MONTADOR', 
            contact : '<a href="#"  > Cadastre-se: rhmoveisfenixitabuna@gmail.com</a>' ,
            Description: ' Possuir CNH categoria A;  Experiência com montagens de móveis'
        },{
            id : '.',
            nameCompany: 'He-net', 
            job:'Cargo:  VENDEDOR CORPORATIVO (ITABUNA E ILHÉUS)', 
            contact : '<a href="https://henet.solides.jobs/vacancies/176828#vacancyDescription"  > Cadastre-se</a>' ,
            Description: '– CNH categoria B; Ensino médio completo; Conhecimento no pacote Office; -Técnicas de vendas em B2B ; -Disponibilidades para viagens Atuar nas seguintes cidades: – Itabuna; Ilhéus; Jequié'
        },{
        id : '.',
        nameCompany: 'Polo Wear- Shopping', 
        job:'Cargo:  GERENTE DE VENDAS ', 
        contact : '<a href="https://www.vagas.com.br/vagas/v2429656/gerente-de-vendas-loja-polo-wear-inauguracao-shopping-jequitiba"  > Cadastre-se</a>' ,
        Description: 'Preferencialmente, ter superior completo ou cursando; Ter atuado no segmento de varejo de vestuário; Experiência anterior em cargos de liderança em lojas;'
    },
     {
        id : '.',
        nameCompany: 'Polo Wear - shopping', 
        job:'Cargo: SUBGERENTE DE VENDAS', 
        contact : '<a href="https://www.vagas.com.br/vagas/v2429657/subgerente-de-vendas-loja-polo-wear-inauguracao-shopping-jequitiba"  > Cadastre-se</a>' ,
        Description: 'Ter atuado no segmento de varejo de vestuário; Experiência anterior em cargos de liderança em lojas;'
    },
     {
        id : '.',
        nameCompany: 'CIEE ', 
        job:'Cargo: AUXILIAR DE SERVIÇOS ADMINISTRATIVOS (PCD)', 
        contact : '<a href="https://ciee.gupy.io/job/eyJqb2JJZCI6Mjg1MDMwNSwic291cmNlIjoiZ3VweV9wdWJsaWNfcGFnZSJ9?jobBoardSource=gupy_public_page"  > Cadastre-se</a>' ,
        Description: 'Será imprescindível ter Laudo Médico e/ou Exame complementar; A pessoa precisará ter o ensino médio; Precisará conhecer o pacote office ou ferramental do G/Suite; Controlar e monitorar o fluxo de contratações de aprendizes e estagiários; Análise de documentos dos candidatos; Remuneração: R$ 1.969,00.'
    },
        {
            id : '.',
            nameCompany: 'Pague Menos - publicada 02-09-22', 
            job:'Cargo: ATENDENTE DE FARMÁCIA', 
            contact : '<a href="https://portal.kenoby.com/paguemenos/login?redirect=%2Fpaguemenos%2Fdashboard&action=email"  > Cadastre-se</a>' ,
            Description: 'Conhecimento em Informática Básica; Ensino médio completo; Desejável curso de auxiliar de farmácia'
        },{
            id : '.',
            nameCompany: 'Barry Callebaut ', 
            job:'Cargo: ANALISTA ADMINISTRATIVO DE PRODUÇÃO', 
            contact : '<a href=""  > Cadastre-se</a>' ,
            Description: ' Alta de estoque, consumo de componentes e fechamento técnico dentro do sistema SAP; Entradas de informações SAP, em planilhas e relatórios de controle de processos; Desenvolvimento de planilhas de controles e apresentações em Power point; Apoiar e desenvolver procedimentos e treinamentos; Ensino superior completo; Excel avançado; Desejável conhecimento em SAP.'
        },
        {
            id : '.',
            nameCompany: 'Super fibra  - publicada 30-08-22', 
            job:'Cargo: VENDEDOR ', 
            contact : '<a href="#"  > Cadastre-se: envie curriculo para  (73) 99118-3118</a>' ,
            Description: 'R$ 1.212,00 + ajuda de custo + comissão; experiencia Atuando com vendas externas'
        },
        {
            id : '.',
            nameCompany: 'INEC  - publicada 29-08-22', 
            job:'Cargo:  AGENTE DE MICROCRÉDITO URBANO ', 
            contact : '<a href="https://inec.gupy.io/job/eyJqb2JJZCI6NzgxMDAzLCJzb3VyY2UiOiJndXB5X3B1YmxpY19wYWdlIn0=?jobBoardSource=gupy_public_page"  > Cadastre-se</a>' ,
            Description: 'Controle e Acompanhamento de sua carteira de crédito; Realizar promoções e palestras de informação dos produtos de Microfinança e de outros eventos que tenham por finalidade captar novos clientes e manter os clientes ativos com alto nível de satisfação; Oferecer orientações para a boa administração dos créditos concedidos; Formação: Ensino Médio completo; Experiência em vendas externas, negociação e cobrança; Salário: R$ 1.487,56;'
        },
         {
            id : '.',
            nameCompany: 'Intervalor ', 
            job:'Cargo: ASSISTENTE ADMINISTRATIVO JR ', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2427260/assistente-administrativo-jr"  > Cadastre-se</a>' ,
            Description: 'Conferência de documentação; Monitoramento do sistema de análise de crédito; Preenchimento de ficha cadastral;'
        },
        {
            id : '.',
            nameCompany: 'Fedex - publicada 25-08-22', 
            job:'Cargo: COORDENADOR ASSISTENTE DE OPERAÇÕES III', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2424629/coordenador-assistente-de-operacoes-iii"  > Cadastre-se</a>' ,
            Description: 'Ensino médio completo, Graduação Completa será um diferencial; Experiência na área de transportes; Experiência com atendimento ao cliente; Disponibilidade para viagens;'
        },
         {
            id : '.',
            nameCompany: 'Fedex ', 
            job:'Cargo: CONFERENTE ', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2425127/conferente"  > Cadastre-se</a>' ,
            Description: 'Ensino médio completo; Bom relacionamento interpessoal e comportamento;'
        },
         {
            id : '.',
            nameCompany: 'Fedex ', 
            job:'Cargo: ASSISTENTE DE OPERAÇÕES', 
            contact : '<a href="https://www.vagas.com.br/vagas/v2425130/assistente-de-operacoes"> Cadastre-se</a>' ,
            Description: 'Realizar o acompanhamento dos indicadores operacionais; Ensino Médio Completo; Conhecimento pacote Office.'
        },
         {
            id : '.',
            nameCompany: 'Grupo Big', 
            job:'Cargo: APRENDIZ ', 
            contact : '<a href="https://jobs.kenoby.com/grupobig"  > Cadastre-se</a>' ,
            Description: 'Ensino Fundamental Cursando a partir do 7ª ano; Desejável conhecimento do Pacote Office;Responsável por verificar a entrada e saída de correspondências;Auxiliar no Empacotamento de mercadorias;Auxiliar na reposição de mercadorias;'
        },
         {
            id : '.',
            nameCompany: 'Grupo Big', 
            job:'Cargo: OPERADOR DE LOJA (CAIXA)', 
            contact : '<a href=""  > Cadastre-se</a>' ,
            Description: 'Atendimento ao cliente, Reposição de mercadorias, Limpeza e organização do local de trabalho; Ensino Médio Completo; Desejável experiências com atendimento ao cliente; '
        },
        
    
          {
            id : '.',
            nameCompany: 'Aché Laboratórios ', 
            job:'Cargo: PROPAGANDISTA VENDEDOR', 
            contact : '<a href=""  > Cadastre-se</a>' ,
            Description: '* Desenvolver seu trabalho externamente, com divulgação de medicamentos para área médica, por meio de visitas em Clínicas, Rede de Farmácias, Distribuidores, Hospitais e Consultórios, através de um prévio planejamento e implementação de ações comerciais e promocionais conforme estratégia e política da Empresa; Superior completo; Imprescindível vivência na área comercial; Possuir CNH definitiva'
        },
        {
            id : '.',
            nameCompany: 'não definido - Zematti RH  - publicada 20-08-22 ', 
            job:'Cargo: Gerente de Loja', 
             contact : '<a href="https://zemattirh.pandape.com.br/Detail/195152"  > Cadastre-se</a>' ,
            Description: 'Responsável pelo resultado da Auditoria interna; Controle de inventário, desperdícios e pedidos de compra da unidade; Gestão dos indicadores e custos operacionais; realizando a gestão da equipe'
        },
        {
            id : '.',
            nameCompany: 'Sicoob Coopec - publicada 18-08-22 ', 
            job:'Cargo: ESTAGIÁRIO ADMINISTRATIVO', 
            contact : 'contato: <a href="https://career4.successfactors.com/career?company=sicoob"  > Cadastre-se</a>',  
            Description: 'R$ 800,00; Cursando a partir do 3º semestre em Administração;CARGA HORÁRIA: 30h semanais/ 06h diárias; Oportunidades de Carreira: 3369 - Sicoob Coopec'
        },   
        {
            id : '.',
            nameCompany: 'Sicoob Coopec ', 
            job:'Cargo: ESTAGIÁRIO – ÁREA DE RELACIONAMENTO', 
            contact : 'contato: <a href="https://career4.successfactors.com/career?company=sicoob"  > Cadastre-se</a>',
            Description: 'Auxiliar na atualização cadastral de associados/clientes; Apoiar no atendimento ao público; CARGA HORÁRIA: 30h semanais/ 06h diárias; Bolsa auxílio (R$ 800,00) + Transporte; Cursando a partir do 3º semestre em Administração, Ciências Contábeis, Economia ou áreas afins.'
        },
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
            contact : 'contato: <a href="<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a>  ',
            Description: 'Ensino Médio Completo;Desejável experiência com vendas;Necessário disponibilidade para trabalhar em escala 6×1 (feriados e finais de semana);'
        },
        {
            id : '.',
            nameCompany: 'Grupo Big', 
            job:'Cargo: AÇOUGUEIRO ', 
            contact : 'contato: <a href="<a href="https://jobs.barry-callebaut.com/search/?createNewAlert=false&q=&optionsFacetsDD_country=&optionsFacetsDD_department=&optionsFacetsDD_dept=&locationsearch=itabuna"> Cadastre-se</a> ',
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