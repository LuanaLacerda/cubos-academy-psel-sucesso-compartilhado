function solucao(sequencia) {
	//seu codigo aqui
let resposta = 0;

for(let i = 0; i < sequencia.length ;i++) {
    if (sequencia[i] === ">"){
        if (resposta === 6){
            resposta = 0;
        } else {
            resposta++;
        }
    } else if (sequencia[i] === "<"){
        if (resposta === 0){
            resposta = 6;
        } else {
            resposta--;
        }
    }
}
console.log(resposta)
}
