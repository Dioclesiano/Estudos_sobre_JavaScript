function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'Imagens/Editada/Manhã.png'
        msg.innerHTML = `Agora são ${hora} horas. <strong>Boa Dia!</strong>`
        document.body.style.background = '#afc1d9'
    }
    else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        msg.innerHTML = `Agora são ${hora} horas. <strong>Boa Tarde!</strong>`
        img.src = 'Imagens/Editada/Tarde.png'
        document.body.style.background = '#fe8206'
    } 
    else if (hora >= 18 && hora <= 24) {
        // Boa Noite!
        msg.innerHTML = `Agora são ${hora} horas. <strong>Boa Noite!</strong>`
        img.src = 'Imagens/Editada/Noite.png'
        document.body.style.background = '#5a4165'
    }
    else {
        // Inválido
        msg.innerHTML = `Hora Inválida`
        img.src = 'Imagens/Editada/erro.jpg'
    }
}