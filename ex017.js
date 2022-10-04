// iremos verificar agora no exercício como conferir se o número é ímpar ou par

function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp(11)
console.log(res)

// uma function pode ter mais de um return, mas no caso, seria necessário um if else para retornar só um valor


// fazendo um exemplo de soma com uma função:

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2,3))
/* e se por acaso, não mandarmos dois parâmetros? por exemplo, mandássemos só o número 2 sem o 3 para somar?
nesse caso, precisaríamos acrescentar no parâmetro algo para substituír o parãmetro, como no exemplo abaixo: */
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2))

// outra coisa que também podemos fazer no JavaScript é jogar uma função dentro de uma variável, assim como no exemplo abaixo:

let v = function(x) {
    return x*2
}
console.log(v(5)) 

/* vamos calcular o fatorial de um número, o fatorial do número é ele multiplicando até 1, diminuindo o valor de 1 em 1, por exemplo:
5! = 5 x 4 x 3 x 3 x 1
*/

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c 
    }
    return fat
}
console.log(fatorial(5))