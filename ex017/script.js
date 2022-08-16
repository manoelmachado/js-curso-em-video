function calcular () {
    var num = document.getElementById('txtn')
    var r = document.getElementById('res') 
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        r.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            r.appendChild(item)
            c++
        }
    }
}

var A = 10
var B = 9
var X = A + B
console.log(`X = ${X}`)