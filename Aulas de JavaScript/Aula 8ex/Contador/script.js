function contar(){
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        
       //window.alert('[ERRO] Faltam dados!')
       res.innerHTML ='Impossivel contar!'  

    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0){
        window.alert('Passo inválido! Considerandi PASSO 1')
        p = 1
       }
        if (i < f) {
            //Contagem crescente
             for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            //Contagm regressia
            for (let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}