function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 8) {
                //Criança
                img.setAttribute('src', 'Imagens/Editada/MeninoCriança.png')
            } else if (idade <= 18) {
                //Adolescente
                img.setAttribute('src', 'Imagens/Editada/MeninoAdolescente.png')
            } else if (idade <= 65) {
                //Adulto  
                img.setAttribute('src', 'Imagens/Editada/HomemJovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/Editada/VelhoHomem.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 8) {
                //Criança 
                img.setAttribute('src', 'Imagens/Editada/MeninaCriança.png')
            } else if (idade <= 18) {
                //Adolescente
                img.setAttribute('src', 'Imagens/Editada/MeninaAdolescente.png')
            } else if (idade <= 65) {
                //Adulto
                img.setAttribute('src', 'Imagens/Editada/MulherJovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/Editada/VelhaMulher.png')
            }
        }

        //Centralizando o resultado pelo Java Script
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}