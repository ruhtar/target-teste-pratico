function fibonnaci(n){
    let sequencia = [0,1];

    while(sequencia[sequencia.length-1] < n){
        sequencia.push(sequencia[sequencia.length-1]+sequencia[sequencia.length-2]);
    }

    if(sequencia[sequencia.length-1] == n || sequencia[sequencia.length-2] == n){
        return `O n�mero ${n} pertence a sequ�ncia!`;
    }
    return `O n�mero ${n} n�o pertence a sequ�ncia...`;
}
console.log(fibonnaci(10));
console.log(fibonnaci(13));