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
Da maneira abaixo reproduzimos uma quantidade maior de repetições e com um códígo bem mais simples e limpo.
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
Existe outra maneira de se realizar o mesmo comando com uma sintaxe diferente, para ser usado em casos específicos
*/