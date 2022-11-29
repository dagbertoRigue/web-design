//Botão direito sobre o arquivo .html - Live Server
//Para visualizar objetos e variáveis - F12 -> Console
console.log('dagberto');
console.log('Bem vindo, ao curso!');

//variáveis no Javascript
let nome = 'Dagberto Rigue';
console.log(nome);

//Para comentar um trecho de código, selecione-o e digite Ctrl + ";".

//constantes no Javascript
let valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

//reatribuindo o valor da constante
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);

//constante no Javascript (imutável)
const valorIngressoBonus = 10; //não é possivel reatribuir

//tipos primitivos
let name = 'dagberto 123 @#$'; //string literal
let idade = 25.4;              //number literal
let estaAprovado = true;       //boolean [true-false]
let sobrenome;                 //undefined
let corSelecionado = null;     //Redefinir um valor
//Para visualizar o tipo de objeto - typeof nomeDaVariavel, no Console

//tipagem dinâmica
//Ex : Java define primeiro um tipo e depois atribui um valor
//  --- Javascript é dinâmico ---

//Objetos
//Criando um objeto - Par chave-valor

let pessoa = {
    name: 'Lorena',
    idade: 3,
    estaAprovado: true,
    sobrenome: 'Rigue'
};

console.log(pessoa);
console.log(pessoa.name);
console.log(pessoa.idade);

//Arrays : conjunto de dados que pode ser acessado por um índice
let familia = [26,45,50,17];
console.log(familia);
console.log(familia[2]);
let familia2 = [true,45,'Dagberto',38];
console.log(familia2.length);
console.log(familia2[0]);

//Funções
//Verbo + Substantivo
//ex : resetaCor 
let corSite = "azul"
function resetaCor(){
    corSite = "branca";
};
console.log(corSite);
resetaCor();
console.log(corSite);

//Função com parâmetro
let corMeuSite = "azul";
function resetaCorSite(cor){
    corMeuSite = cor;
};
console.log(corMeuSite);
resetaCorSite("vermelho");
console.log(corMeuSite);

//Função com mais de 1 parâmetro
let corMeuSiteWeb = "azul";
function resetaCorSiteWeb(cor, tonalidade){
    corMeuSiteWeb = cor + '-' + tonalidade;
};
console.log(corMeuSiteWeb);
resetaCorSiteWeb("verde", "claro");
console.log(corMeuSiteWeb);

//Tipos de Função :
//1.realiza uma tarefa e não retorna nada
function dizerNome(){
    console.log('dagberto');
};
dizerNome();
//2.realiza uma tarefa e retorna valor
function MultiplicaPorDois(valor){
    return valor*2;
}
let resultado = MultiplicaPorDois(5);
console.log(resultado);

//Tipos de Operadores :
//Operadores Aritméticos (matemáticos)
//Operadores de Atribuição
//Operadores de Comparação
//Operadores Lógicos
//Operadores Bitwise

// --- Operadores Aritméticos (matemáticos) ---
let salario = 100;
// +, -, *, /, **, ++, --
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

let valorIdade = 18;
console.log(valorIdade++) //será exibido 18 porque a operação está após o valor atribuído
console.log(valorIdade) //agora será mostrado o valor incrementado
console.log(++valorIdade) //caso queira que apareça o valor incrementado de primeira

// --- Operadores de Atribuição --
let valorx = 100;
valorx += valorx;
//É o mesmo que : valorx = valorx + valorx;
console.log(valorx);
//idem para subtração
valorx -= valorx;
console.log(valorx);

// --- Operadores de Comparação ---
//Igualdade estrita
console.log(1 === 1); //três sinais de igualdade compara o valor e o tipo
console.log('1' ===1); //diferentemente do exemplo anterior, 
                       //a resposta será 'false', porque os tipos são diferentes (string e number)
//Igualdade solta
console.log(1 == 1); //true
console.log('1' == 1); //true tbm, mas isso não é recomendado
//Comparação ternária
//ex : cliente com pontuação acima de 100 = premium, menor = comum
let pontos = 201;
let tipoCliente = pontos > 200 ? 'Premium' : 'Comum';
// condição ? true : false
console.log(tipoCliente);

// --- Operadores Lógicos ---
// E (&&) - retorna true se os dois operandos forem true
console.log(true && true);
//Exemplo :
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);
// OU (||) - retorna true se um dos operandos forem true
let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = false;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
console.log('Pode Aplicar : ', podeAplicar2);
// NOT (!) - nega qualquer variável
let candidatoRecusado = !podeAplicar
console.log('Candidato Recusado : ', candidatoRecusado);

//Operadores Bitwise

//Falsy
//undefined
//null
//0
//false
//''
//NaN (not a Number)

//Truthy - comparação de valores não booleanos
let corPersonalzada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalzada || corPadrao;
console.log(corPerfil);

