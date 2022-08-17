let num = [4,5,6,7,8]
num.push(1) // adicinamos o valor 1 no vetor
num.sort() // colocamos em ordem crescente
console.log(`O nosso vetor é o ${num}`) // mostrando o nosso vetor
console.log(`O nosso vetor tem ${num.length} posições`) // mostrando quantas posições tem nosso vetor
console.log(`O segundo valor do vetor é o ${num[1]}`) // mostrando qual o valor do vetor na posição dada

let valores = [8,1,7,4,2,9]
for(let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// existe outra maneira de se realizar esse código, vamos mostrar em seguida


// utilizando essa sintaxe, diminuimos o código e deixamos ele mais simples
let valores = [8,1,7,4,2,9]
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
 }

let val = [8,3,7,4,2,9]
val.push(1)
val.sort()
console.log(`O nosso vetor tem ${val.length} posições`)
console.log(`O segundo valor do vetor é o ${val[1]}`)
//let pos = val.indexOf(8)
//console.log(`O valor 8 está na posição ${pos}`)
console.log(`Nosso valores são: ${val}`)
let pos = val.indexOf(10) // mostrando que o retorno é sempre -1 quando não existe o valor no vetor
if (pos == -1) { // podemos utilizar do if else para adicionar mais informações, como "o valor não foi encontrado", por exemplo
    console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 10 está na posição ${pos}`)
}