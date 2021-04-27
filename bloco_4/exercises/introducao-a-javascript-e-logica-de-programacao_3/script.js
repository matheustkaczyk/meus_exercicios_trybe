/* 01
let n = 5;
let asterisco = '*';
let linha = '';

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  linha = linha + asterisco;
};
for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1){
    console.log(linha);
}
*/
/* 02
let n = 5;
let asterisco = "*";
let linha = "";

for (let index = 0; index < n; index += 1){
  linha = linha + asterisco;
  console.log(linha);
}
*/
/* 03
let n = 5;
let asterisco = '*';
let linha = '';
let posicao = n;

for (let index = 0; index < n; index += 1) {
  for (let colunaindex = 0; colunaindex <= n; colunaindex += 1){
    if (colunaindex < posicao){
      linha = linha + " ";
    } else {
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = "";
  posicao -= 1;
}
*/