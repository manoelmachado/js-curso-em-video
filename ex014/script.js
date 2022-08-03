function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {    
        // bom dia
        img.src = 'manha.png'
        window.document.body.style.background = '#f2c86d'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#d68828'
    } else {
        // boa noite
        img.src = 'noite.png'
        window.document.body.style.background = '#634726'
    }
}