let a = 'roxo';
let b = 'lilás';

console.log(a);
console.log(b);

let c = a;
a = b;
b = c;

console.log(a);
console.log(b); 

// ---------- Condicionais Javascript ----------
//  --- If.. Else ---
// Se hora estiver entre 06:00 e 12:00 - Bom dia !
// Se hora estiver entre 12:00 e 18:00 - Boa tarde !
// Caso contrário - Boa boite !
let condicao = '';
if(condicao) {
    //codigo a ser executado
}
else {
    //codigo a ser executado
}

let hora = 22
if(hora > 6 && hora < 12) {
    console.log('Bom dia !')
} 
else if (hora > 12 && hora < 18){
    console.log('Boa tarde !')
}
else {
    console.log('Boa noite !')
}

//  --- switch case ---
let permissao = 'gerente'; //comum, gerente, diretor
switch(permissao) {
    case 'comum':
        console.log('Usuário Comum!');
        break;
    case 'gerente':
        console.log('Usuário Gerente!');
        break;
    case 'diretor':
        console.log('Usuário Diretor!');
        break;
    default:
        console.log('Usuário não identificado!')
}

// ---------- Looping Javascript ----------
//1. For
//2. While
//3. Do.. While
//4. For.. In
//5. For.. Of

// 1. For
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo !', i)    
}
//imprimindo apenas os ímpares
for (let j = 0; j < 10; j++) {
    if(j % 2 !== 0){
        console.log(j)
    }    
}

//2. While
let k = 5;
while (k >= 1) {
    if(k % 2 !== 0){
        console.log(k)
    } 
    k--;
}

//3. Do.. While
let m = 0;
do{
    console.log('Digitando..', m);
    m++;
} while(m < 10)

//4. For.. In
const identificacao = {
    nome: 'dagberto',
    idade: 38
};

for(let chave in identificacao){
    console.log(chave, identificacao[chave]);
}

//5. For.. Of
const cores = ['azul', 'rosa','amarela','branco','verde'];

for(let cor of cores){
    console.log(cor);
}