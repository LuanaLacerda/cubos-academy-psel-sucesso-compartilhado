
function solucao(obj) {
	
     if (obj.jaTomouVacina === true){
         console.log ("JA TOMOU VACINA")
         
         } else if (obj.temComorbidade === true && obj.idade < 60){
             console.log("APTA POR COMORBIDADE")
         } else if (obj.idade >= 60 && obj.jaTomouVacina === false){
             console.log("APTA POR IDADE")
         } else {
             console.log("INAPTA")
         }
    
    

}