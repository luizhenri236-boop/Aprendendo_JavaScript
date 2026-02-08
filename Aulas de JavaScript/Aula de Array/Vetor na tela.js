let valores = [8,5,6,4,9,8]
valores.sort()
//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//No lugar de fazer a forma acima usando  for que é uma condição de repetição fica mais organizado e evita bugs

/*
for(let pos=0;pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// ja o for(in) percorre todas as posições do array automaticamente 

for(let pos in valores) {
    console.log(`Apoção ${pos} tem o valor ${valores[pos]}`)
}