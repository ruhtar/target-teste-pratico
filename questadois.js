function fibonnaci(n){
    let sequenciaDeFibonnaci = [0,1];
    for (let i = 2; i < n; i++) {
        sequenciaDeFibonnaci.push(sequenciaDeFibonnaci[i-1]+sequenciaDeFibonnaci[i-2])
    }
    return sequenciaDeFibonnaci
}

console.log(fibonnaci(11))