const faturamento = {
    "SP" : 67836.43, 
	"RJ" : 36678.66,
    "MG" : 29229.88,
    "ES" : 27165.48,
    "Outros" : 19849.53
}
let valorTotal = 0;
function calcularPercentual(faturamento){
    for(const chave in faturamento){
        valorTotal += faturamento[chave];
    }
    for(const chave in faturamento){
        let resultado = faturamento[chave]*100/valorTotal;
        console.log(`${chave}: ${resultado.toFixed(2)}%`);
    }
}
calcularPercentual(faturamento)