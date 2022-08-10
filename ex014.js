/*
Podemos fazer repetições escrevendo todas as vezes que precisamos repetir, mas isso não é nada prático e existem outras maneiras muito fáceis de se realizar as repetições
*/
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')

/*
Da maneira abaixo reproduzimos uma quantidade maior de repetições e com um códígo bem mais simples e limpo. Declaramos uma condição, o código testa, executa e faz o looping.
sintaxe:

while (condição){

}

*/
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}

/*
Existe outra maneira de se realizar a repetição com uma sintaxe diferente, para ser usado em casos específicos. O código executa, testa a condição e faz o looping.
Sintaxe: 

do {

} while (condicao)

*/

var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)