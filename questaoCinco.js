function inverte(string){
    let stringReversa = '';
    for (let i = string.length - 1; i >= 0; i--) {
      stringReversa += string[i];
    }
    return stringReversa;
}
console.log(inverte("String a ser invertida"));

