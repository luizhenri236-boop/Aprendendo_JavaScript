let num = [5,6,9,8,4,7,2] 
num.push(1) //puch adiciona automaticamente um elemento no final do array e adiciona o conteudo
num.sort() // puch coloca em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // length mostra quantos elementos existem dentro de um array.
console.log(`O primeiro valor do vertor é ${num[0]}`)
let pos = num.indexOf(2) // .indexOf() ele acha dentro do array a chave de onde esta o conteúdo
//caso o .indexOf() não ache um conteudo ou chave existe ele fala -1 que diz que a chave não existe
if (pos == -1 ) {
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
