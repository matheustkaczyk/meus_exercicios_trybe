let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
  media = soma / numbers.length
  }
  if (media >= 20) {
    console.log("Número é maior que 20!")
  } else {
    console.log("Número é menor ou igual a 20!")
};
console.log(`A soma é: ${soma}`);
console.log(`A média é: ${media}`);
