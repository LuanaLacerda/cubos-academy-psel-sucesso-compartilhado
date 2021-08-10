function solucao(obras) {
    //seu codigo aqui
 
 var obraMaisCara = null;

for(let i = 0; i < obras.length; i++){
    if (obraMaisCara == null){
        obraMaisCara = obras[i];
    } else if (obras[i].valor > obraMaisCara.valor) {
        obraMaisCara = obras[i];
    }
    
}
console.log(obraMaisCara.nome)


   

}
