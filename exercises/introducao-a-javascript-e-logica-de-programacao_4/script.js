function maisRepete(numeros){
    let numeroRepete = 0;
    let contagemNumero = 0;
    let indexNumRep = 0;
    for (let index in numeros){
        let verificacaoNumero = numeros[index];
        for (let index2 in numeros){
        if (verificacaoNumero === numeros[index2]){
            contagemNumero += 1;
        }
        }
    if (contagemNumero > numeroRepete){
        numeroRepete = contagemNumero;
        indexNumRep = index;
    }
    contagemNumero = 0;
    }
return numeros[indexNumRep];
}
console.log(maisRepete([4, 3, 3, 5, 5, 6, 8, 8, 8, 8, 8]));
