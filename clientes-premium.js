function solucao(precos) {
    //seu codigo aqui
    let total = 0;

    for (const item of precos) {
        total += item
    }
         
    if (precos.some(p => p > 200) && total >= 1000) {
    console.log("PREMIUM")
        } else if (precos.some(p => p <= 200) && total >= 1000) {
            console.log("VIP")
        } else {
            console.log("NORMAL")
        }
                


}