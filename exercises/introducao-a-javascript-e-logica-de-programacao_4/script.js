function soma(n){
    let total = 0;
    for (let index = 0; index <= n; index ++) {
        total += index;
    }
    return total;
}
console.log(soma(20));