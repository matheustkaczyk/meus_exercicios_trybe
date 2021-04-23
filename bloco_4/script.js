/* 1
let a = 13
let b = 23

let soma = (a + b);
  console.log(soma);

let subtracao = (a - b);
  console.log(subtracao);

let multi = (a * b);
  console.log(multi);

let divisao = (a / b);
  console.log(divisao);

let modulo = (a % b);
  console.log(modulo);
*/
/* 2
let numero1 = 32;
let numero2 = 54;

if (numero1 > numero2){
    console.log(numero1);
} else {
    console.log(numero2);
}
*/
/* 3
let numero1 = 50
let numero2 = 74
let numero3 = 78

if (numero1 > numero2 && numero1 > numero3){
    console.log(numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2)
} else {
    console.log(numero3)
}
*/
/* 4
let numero = 2

if (numero >= 0) {
    console.log('Número positivo')
} else {
    console.log("Número negativo")
}
*/
/* 5
let angulo1 = -2;
let angulo2 = 60;
let angulo3 = 60;

let soma = angulo1 + angulo2 + angulo3;
let angulopositivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulopositivo){
  if (soma === 180){
    console.log(true);
  } else {
    console.log (false);
}
} else {
  console.log("Erro!")
}
*/ 6
/*
let pecaXadrez = "torre";

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.")
    break;
  case 'rainha':
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
    break;
  case 'bispo':
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
    break;
  case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
    break;
  case 'torre':
  console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
    break;
  case 'peão':
  console.log(" peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
    break;
} 
*/
/* 7
let nota = 30;

if (nota < 0 || nota > 30){
  console.log("Inválido!")
} else if(nota >= 90) {
  console.log("A")
} else if(nota >= 80){
  console.log("B")
} else if(nota >= 70){
  console.log("C")
} else if(nota >= 60){
  console.log("D")
} else if (nota >= 50){
  console.log("E")
} else {
  console.log("F")
}
*/
/* 8
let numero1 = 1;
let numero2 = 3;
let numero3 = 7;

let epar = false;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0){
  epar = true;
}
console.log(epar);
*/
/* 8
let numero1 = 2;
let numero2 = 4;
let numero3 = 7;

let eimpar = false;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0){
  eimpar = true;
}
console.log(eimpar);
*/