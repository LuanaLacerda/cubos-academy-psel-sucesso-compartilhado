function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
 

   
let listaSemNenhumaPalavra = false;

for (let item of palavras){
  if (item[0] === primeiraLetra && item[1] === segundaLetra){
        listaSemNenhumaPalavra = true;
        console.log(item)
    }
}

if (listaSemNenhumaPalavra === false) {
    console.log("NENHUMA")
}
        
      
    
      
 
}
